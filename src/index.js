require("dotenv").config();
import puppeteer from "puppeteer";

async function printPdf(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
  });

  await page.goto(url, { waitUntil: "networkidle2" });

  await page.pdf({
    path: `screenshot.pdf`,
    pageRanges: "1",
    format: "a4",
    printBackground: true,
  });

  await page.close();
}

async function main() {
  try {
    await printPdf("https://google.com");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
