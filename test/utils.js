
const APP = process.env.TEST_ENV;
const URL_CONFIGS = {
    local: `http://${process.env.DOCKER ? "host.docker.internal" : "localhost"}:3030`,
    dev: "https://github.com/CassieRyu/API-RestAssured",
};

export const waitAndClick = async (selector) => {
    await page.waitForSelector(selector);
    return page.click(selector);
};

export const resetFormInputFocus = async () => {
    await page.click("form");
};

export const selectDropdownItem = async (selector, value ) => {
    const values = !Array.isArray(value) ? [value] : value;

    await page.click(selector);
    for (const dataValue of values) {
        await page.waitFor(`[data-value='${dataValue}']`);
        await page.click(`[data-value='${dataValue}']`);
    }
    await page.click("form");
    await page.waitFor(500);
};

export const BASE_URL = URL_CONFIGS[APP];
