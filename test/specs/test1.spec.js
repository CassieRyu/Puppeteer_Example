import { IssuePage } from "../pages/IssuePage";

describe('Page Test', () => {

    let issuePage;
    beforeAll(async () => {
        issuePage = new IssuePage(page);
    });

    // it('should contain text test', async () => {
    //     let text = await page.evaluate(() => document.body.textContent);
    //     await expect(text).toContain('New issue');
    // });

    it('Match issue whole page', async ()=> {
        await issuePage.open();
        const issue = await issuePage.getPage();
        const pageScreen = await issue.screenshot();
        await expect(pageScreen).toMatchImageSnapshot();
    });
    it('New issue should exist', async () => {
        await issuePage.open();
        let newIssueBtn = await issuePage.newIssueBtn();
        await expect(newIssueBtn).exists.contains("New issue");
    })
});
