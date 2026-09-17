/* global URL, process */
import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const roots = ["app", "components", "public"];
const checked = new Set([".ts", ".tsx", ".css", ".svg", ".html", ".txt"]);
const forbidden = [
  ["former studio brand", /swift[\s-]?forge/gi],
  ["website builder branding", /made in framer|framer\.com|framerusercontent\.com/gi],
  ["placeholder contact", /unfixedstudio@gmail\.com|\+36\s?70\s?222\s?3333/gi],
  ["hotlinked media", /(?:src|poster)\s*=\s*["']https?:\/\//gi],
  ["placeholder link", /href\s*=\s*["'](?:#["']|javascript:)/gi],
  ["old licensing positioning", /bản quyền microsoft|windows ggwa|office ltsc|license advisory/gi],
  ["former portfolio entries", /hyperlaunch|bumpies|sugar[\s-]?senpai|sei[\s-]?baller/gi],
];

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const output = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await files(path));
    else if (checked.has(extname(path))) output.push(path);
  }
  return output;
}

const findings = [];
for (const file of (await Promise.all(roots.map((folder) => files(join(root, folder))))).flat()) {
  const content = await readFile(file, "utf8");
  for (const [label, pattern] of forbidden) {
    pattern.lastIndex = 0;
    if (pattern.test(content)) findings.push(`${relative(root, file)}: ${label}`);
  }
}

if (findings.length) {
  process.stderr.write(`Content check failed:\n${findings.map((item) => `- ${item}`).join("\n")}\n`);
  process.exit(1);
}
process.stdout.write("Content check passed.\n");
