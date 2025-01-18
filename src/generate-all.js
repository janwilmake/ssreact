import fs from "node:fs";

const preactVersion = "10.25.4";
const urls = [
  `https://unpkg.com/preact@${preactVersion}/dist/preact.umd.js`,
  `https://cdn.jsdelivr.net/npm/preact@${preactVersion}/hooks/dist/hooks.umd.js`,
];
const files = ["./microjsx.js", "./ssreact.js"];

const code = files.map((path) => fs.readFileSync(path, "utf8"));
const urlCode = await Promise.all(
  urls.map((url) => fetch(url).then((res) => res.text())),
);
const allCode = urlCode.concat(code).join("\n\n");
fs.writeFileSync("./bundle.js", allCode, "utf8");
// import { Language, minify } from "https://deno.land/x/minifier/mod.ts";
// console.log(minify(Language.JS, allCode));
