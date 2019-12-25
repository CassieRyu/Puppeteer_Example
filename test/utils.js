const APP = process.env.TEST_ENV;
const URL_CONFIGS = {
    local: `http://${process.env.DOCKER ? "host.docker.internal" : "localhost"}:3030`,
    dev: "https://github.com/CassieRyu/API-RestAssured",
};

const BASE_URL = URL_CONFIGS[APP];

const utils = {

    async getInnerText(selector) {
        return await page.$eval(selector, e => e.innerText);
    },

    async waitAndClick(selector) {
        await page.waitForSelector(selector);
        return page.click(selector);
    },

    async resetFormInputFocus() {
        await page.click("form");
    },

    async selectDropdownItem(selector, value) {
        const values = !Array.isArray(value) ? [value] : value;

        await page.click(selector);
        for (const dataValue of values) {
            await page.waitFor(`[data-value='${dataValue}']`);
            await page.click(`[data-value='${dataValue}']`);
        }
        await page.click("form");
        await page.waitFor(500);
    }

};

module.exports = {utils, BASE_URL};
