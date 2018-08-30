const devices = require('puppeteer/DeviceDescriptors');

const timeout = 5000;
const searchLocator = 'div[id="sb_ifc0"]';
const searchBtnLocator = 'input[type="submit"]';
const resultStatusLocator = '#resultStats';

describe('Google Home Page Test', () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
            await page.goto('https://google.com');
        }, timeout);

        afterAll(async () => {
            await browser.close();
        });

        it('should contain google test', async () => {
            let text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('google');
        });

        it('should match home page image', async ()=> {
            await page.focus(searchLocator);
            await page.type(searchLocator, 'java');
            await page.click(searchBtnLocator);
            await page.waitForSelector(resultStatusLocator);

            const image = await page.screenshot();
            expect(image).toMatchImageSnapshot();
        })
    },
    timeout
);
