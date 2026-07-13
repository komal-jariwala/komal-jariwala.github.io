import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "resume.html");
const outputPaths = [
  path.join(__dirname, "..", "public", "resume.pdf"),
  "/Users/komaljariwala/Downloads/Komal.Jariwala.Resume.pdf",
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });

for (const outputPath of outputPaths) {
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  console.log(`Wrote ${outputPath}`);
}

await browser.close();
