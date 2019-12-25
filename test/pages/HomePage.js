const { BASE_URL, utils } = require("../utils");
// const homePath = BASE_URL;

const HomePage = {

    async open() {
        return page.goto(BASE_URL);
    },

    async getPage() {
        return page.waitForSelector("#js-repo-pjax-container");
    }
};

module.exports ={ HomePage };