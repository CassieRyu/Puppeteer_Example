const { IssuePage } = require("../pages/IssuePage");
const { HomePage } = require("../pages/HomePage");

describe('Page Test', () => {


    // beforeAll(async () => {
    //     issuePage = new IssuePage(page);
    // });

    it('Match home page', async () => {
        await HomePage.open();
        const homePage = await HomePage.getPage();
        const homePageScreen = await homePage.screenshot();
        await expect(homePageScreen).toMatchImageSnapshot();
    });

    it('Match issue whole page', async ()=> {
        await IssuePage.open();
        const issue = await IssuePage.getPage();
        const pageScreen = await issue.screenshot();
        await expect(pageScreen).toMatchImageSnapshot();
    });
    it('New issue should exist', async () => {
        await IssuePage.open();
        let newIssueText = await IssuePage.newIssueBtnText();
        await expect(newIssueText).toEqual("New issue");
    })
});
