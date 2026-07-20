/* global URL, console, process */
import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const roots = ["app", "components", "lib", "public"];
const allowedExtensions = new Set([".ts", ".tsx", ".txt", ".md", ".json", ".html"]);

const forbidden = [
  { label: "old phone number", pattern: /0931138999/g },
  { label: "old email address", pattern: /taind2512@gmail\.com/gi },
  { label: "outdated contact pending wording", pattern: /pending update|Zalo đang cập nhật|Zalo cập nhật|Chờ Zalo|Kênh liên hệ chính thức đang được cập nhật/gi },
  { label: "old AI positioning", pattern: /AI-first development studio|Book AI Build Call|agentic workflow/gi },
  { label: "unsupported reseller claim", pattern: /LOREM (?:là|is an?) (?:đại lý ủy quyền|authorized reseller|official (?:Microsoft|Adobe) partner)/gi },
  { label: "unsupported CSP claim", pattern: /LOREM (?:là|is an?) CSP indirect reseller/gi },
  { label: "absolute compliance claim", pattern: /cam kết compliant tuyệt đối|guaranteed compliance/gi },
  { label: "cheap-key positioning", pattern: /key giá rẻ|cheapest product key/gi },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (["node_modules", ".next", "out", ".git"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (allowedExtensions.has(extname(entry.name))) files.push(path);
  }

  return files;
}

const files = (await Promise.all(roots.map((folder) => walk(join(root, folder))))).flat();
const findings = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const rule of forbidden) {
    rule.pattern.lastIndex = 0;
    if (rule.pattern.test(content)) {
      findings.push(`${relative(root, file)}: ${rule.label}`);
    }
  }
}

if (findings.length > 0) {
  console.error("Content governance check failed:\n" + findings.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Content governance check passed (${files.length} files scanned).`);

const llmsText = await readFile(join(root, "public/llms.txt"), "utf8");
const llmsH1Count = (llmsText.match(/^#\s+\S.+$/gm) ?? []).length;
const llmsMarkdownLinks = llmsText.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) ?? [];

if (llmsH1Count !== 1 || llmsMarkdownLinks.length === 0) {
  console.error(
    "Agentic content check failed: public/llms.txt must contain exactly one H1 and at least one Markdown HTTP link.",
  );
  process.exit(1);
}

console.log(
  `Agentic content check passed (${llmsMarkdownLinks.length} Markdown links in public/llms.txt).`,
);
