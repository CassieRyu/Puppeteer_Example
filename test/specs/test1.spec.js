require("expect-puppeteer");
require ("jest-environment-puppeteer");
const devices = require('puppeteer/DeviceDescriptors');
const iPhone6 = devices['iPhone6'];

const timeout = 5000;
const searchLocator = 'input[title="Search"]';
const searchBtnLocator = 'input[type="submit"]';
const resultStatusLocator = '#resultStats';

describe('Page Test', () => {
    const page = jestPuppeteer.page;
    beforeAll( async () => {
        await jestPuppeteer.resetPage()
        //   await page.emulate(iPhone6);
        await page.setViewport({width: 1440, height: 900});
        await page.goto('https://github.com/garris/BackstopJS/issues');
    });

    // afterAll(async () => {
    //     await browser.close();
    // });

    it('should contain text test', async () => {
        let text = await page.evaluate(() => document.body.textContent);
        await expect(text).toContain('New issue');
    });

    it('should match image snapshot', async ()=> {
        const image = await page.screenshot({fullPage: true});
        await expect(image).toMatchImageSnapshot();
    });
});
