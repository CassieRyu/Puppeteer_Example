const devices = require('puppeteer/DeviceDescriptors');
const iPhone6 = devices['iPhone6'];

const timeout = 5000;
const searchLocator = 'input[title="Search"]';
const searchBtnLocator = 'input[type="submit"]';
const resultStatusLocator = '#resultStats';

describe('Page Test', () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
         //   await page.emulate(iPhone6);
            await page.setViewport({width: 1440, height: 900});
            await page.goto('https://github.com/garris/BackstopJS/issues');
        }, timeout);

        afterAll(async () => {
            await browser.close();
        });

        it('should contain text test', async () => {
            let text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('New issue');
        });

        it('should match image snapshot', async ()=> {
            const image = await page.screenshot({fullPage: true});
            expect(image).toMatchImageSnapshot();
        })
    },
    timeout
);
