const { BASE_URL, utils } = require("../utils");
const issuePath = BASE_URL + "/issues";

const IssuePage = {

    async open() {
        return page.goto(issuePath);
    },

    async getPage() {
        return page.waitForSelector("#js-repo-pjax-container");
    },

    async createAnIssue() {
        return utils.waitAndClick('a[href*="/issues/new"]');
    },

    async newIssueBtnText() {
        return utils.getInnerText('details > summary.btn');
    }

};
module.exports={ IssuePage };