import {IssuePage} from "../pages/IssuePage";

describe('Page Test', () => {

    let issuePage;
    beforeAll( async () => {
        issuePage = new IssuePage(page);
    });

    it('should contain text test', async () => {
        let text = await page.evaluate(() => document.body.textContent);
        await expect(text).toContain('New issue');
    });

    it('should match image snapshot', async ()=> {
        const image = await page.screenshot({fullPage: true});
        await expect(image).toMatchImageSnapshot();
    });
});
