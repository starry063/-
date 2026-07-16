import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const files = [
  ["index.html", "text/html; charset=utf-8"],
  ["styles.css", "text/css; charset=utf-8"],
  ["app.js", "text/javascript; charset=utf-8"],
  ["sync-config.js", "text/javascript; charset=utf-8"],
  ["manifest.webmanifest", "application/manifest+json; charset=utf-8"],
  ["sw.js", "text/javascript; charset=utf-8"],
  ["assets/app-icon.svg", "image/svg+xml"],
  ["assets/ink-landscape-bg.png", "image/png"],
  ["assets/plum-wash.png", "image/png"]
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });

const assets = {};
for (const [path, type] of files) {
  const bytes = await readFile(path);
  assets[`/${path}`] = {
    type,
    base64: bytes.toString("base64")
  };
}
assets["/"] = assets["/index.html"];

const server = `const ASSETS = ${JSON.stringify(assets)};

function decodeBase64(base64) {
  if (typeof atob === "function") {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  }
  return Uint8Array.from(Buffer.from(base64, "base64"));
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const key = ASSETS[url.pathname] ? url.pathname : "/index.html";
    const asset = ASSETS[key];
    return new Response(decodeBase64(asset.base64), {
      headers: {
        "content-type": asset.type,
        "cache-control": key === "/index.html" ? "no-cache" : "public, max-age=3600"
      }
    });
  }
};
`;

await writeFile("dist/server/index.js", server);
await writeFile(
  "dist/.openai/hosting.json",
  await readFile(".openai/hosting.json", "utf8")
);

for (const [path] of files) {
  const output = join("dist", path);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, await readFile(path));
}
