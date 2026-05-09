const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 2000 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'd:/KOUWWA/client/screenshot.png', fullPage: true });
  await browser.close();
  console.log("Screenshot saved to screenshot.png");
})();
