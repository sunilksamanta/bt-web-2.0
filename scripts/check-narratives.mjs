// Usage: node scripts/check-narratives.mjs [baseUrl]
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const base = process.argv[2] ?? "http://localhost:3111";
const routes = ["/", "/team", "/services", "/vibe-coding-rescue", "/devops-and-cloud-cost", "/ai-solutions", "/stacks", "/open-source", "/internal-systems"];
const narrative = routes.filter((r) => r !== "/" && r !== "/team");
const banned = /\b(unleash|supercharge|revolutionize|disrupt|10x|ninja|rockstar|family|cutting-edge|seamless|world-class|best-in-class)\b/i;
const failures = [];
const todos = [];
const fail = (r, m) => failures.push(`${r}: ${m}`);
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'");
const inline = (html) => decode(html.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");

// 1. Source files: em dashes and banned words
function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out); else if (/\.(tsx?|css|md)$/.test(f)) out.push(p);
  }
  return out;
}
for (const f of [...walk("app"), ...walk("components"), ...walk("content"), "README.md", "CLAUDE.md"]) {
  const s = readFileSync(f, "utf8");
  if (/[—–]/.test(s)) fail(f, "contains an em/en dash");
  const m = s.replace(/font-family/g, "").match(banned);
  if (m) fail(f, `banned word: ${m[0]}`);
}

for (const r of routes) {
  const res = await fetch(base + r);
  if (!res.ok) { fail(r, `HTTP ${res.status}`); continue; }
  const html = await res.text();
  const body = text(html);

  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (scripts.length !== 1) fail(r, `${scripts.length} JSON-LD scripts (expected 1)`);
  let graph = [];
  try {
    const data = JSON.parse(scripts[0]?.[1] ?? "{}");
    if (data["@context"] !== "https://schema.org" || !Array.isArray(data["@graph"])) fail(r, "JSON-LD missing @context/@graph");
    graph = data["@graph"] ?? [];
  } catch (e) { fail(r, `JSON-LD parse error: ${e.message}`); }
  const types = (n) => [].concat(n["@type"]);
  const org = graph.find((n) => types(n).includes("Organization"));
  if (!org) fail(r, "no Organization node");
  if (!org?.["@id"]?.startsWith("https://www.broadifitech.com/#organization")) fail(r, "Organization @id not www");
  for (const s of graph.filter((n) => types(n).includes("Service"))) if (s.provider?.["@id"] !== org?.["@id"]) fail(r, `Service ${s.name} missing provider ref`);
  if (!graph.some((n) => types(n).includes("BreadcrumbList"))) fail(r, "no BreadcrumbList");
  const faqNode = graph.find((n) => types(n).includes("FAQPage"));
  if (!faqNode && r !== "/team") fail(r, "no FAQPage");
  const visibleQs = [...html.matchAll(/<summary class="qa__sum"><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => inline(m[1]));
  const visibleAs = [...html.matchAll(/<p class="qa__a">([\s\S]*?)<\/p>/g)].map((m) => inline(m[1]));
  const ldQs = (faqNode?.mainEntity ?? []).map((q) => q.name.trim());
  const ldAs = (faqNode?.mainEntity ?? []).map((q) => q.acceptedAnswer.text.trim());
  if (r !== "/team" && JSON.stringify(visibleQs) !== JSON.stringify(ldQs)) fail(r, `FAQ questions differ between HTML and JSON-LD\n  html: ${JSON.stringify(visibleQs)}\n  ld:   ${JSON.stringify(ldQs)}`);
  if (r !== "/team" && JSON.stringify(visibleAs) !== JSON.stringify(ldAs)) fail(r, "FAQ answers differ between HTML and JSON-LD");
  for (const q of faqNode?.mainEntity ?? []) if (!q.name || !q.acceptedAnswer?.text) fail(r, "FAQ question missing name/answer");

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (!title) fail(r, "no <title>"); else if (title.length > 60) fail(r, `title ${title.length} chars: ${title}`);
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  if (!desc) fail(r, "no meta description"); else if (desc.length > 155) fail(r, `description ${desc.length} chars`);
  const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const expect = "https://www.broadifitech.com" + (r === "/" ? "" : r);
  if (canon !== expect) fail(r, `canonical ${canon} (expected ${expect})`);
  if (!/property="og:image" content="[^"]*\/(og\/|opengraph-image)/.test(html)) fail(r, "og:image missing or not page-specific");
  if (!/name="twitter:card"/.test(html)) fail(r, "no twitter card");
  if (/[—–]/.test(body)) fail(r, "rendered page contains an em/en dash");
  const bw = body.match(banned); if (bw) fail(r, `rendered page contains banned word: ${bw[0]}`);
  const mull = (body.match(/Mulltiply/g) ?? []).length;
  if (r !== "/" && mull > 1) fail(r, `Mulltiply mentioned ${mull} times`);

  if (r === "/team") { if (!/Last updated: /.test(body)) fail(r, "no Last updated line"); }
  if (r !== "/" && r !== "/team") {
    if (!/Last updated: /.test(body)) fail(r, "no Last updated line");
    const rel = html.match(/<nav class="related"[\s\S]*?<\/nav>/)?.[0] ?? "";
    const relLinks = [...rel.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    const others = relLinks.filter((h) => narrative.includes(h) && h !== r && h !== "/open-source");
    if (others.length < 2) fail(r, `related links to only ${others.length} other narrative pages`);
    if (r !== "/open-source" && !relLinks.includes("/open-source") && !/href="\/open-source"/.test(html.replace(/<footer[\s\S]*<\/footer>/, ""))) fail(r, "no link to /open-source outside footer");
    const opening = text(html.match(/<p class="nhero__opening">([\s\S]*?)<\/p>/)?.[1] ?? "");
    const words = opening.trim().split(/\s+/).length;
    if (words > 60) fail(r, `opening paragraph is ${words} words (limit 60)`);
    if (!/Broadifi Technologies/.test(body)) fail(r, "first mention should be Broadifi Technologies");
    if (/href="click here"|>click here</i.test(html)) fail(r, "click here anchor text");
  }
  for (const m of html.matchAll(/<mark class="todo">([^<]*)<\/mark>/g)) todos.push(`${r}: ${decode(m[1])}`);
}

console.log("TODOs still visible on rendered pages:");
for (const t of [...new Set(todos)]) console.log("  - " + t);
console.log();
if (failures.length) { console.log("FAILURES:"); for (const f of failures) console.log("  - " + f); process.exit(1); }
console.log("All checks passed for", routes.length, "routes.");
