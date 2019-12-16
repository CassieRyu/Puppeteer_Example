require("jest-puppeteer");
const APP = process.env.TEST_ENV;
const URL_CONFIGS: { [index: string]: string } = {
    local: `http://${process.env.DOCKER ? "host.docker.internal" : "localhost"}:3030`,
    dev: "http://172.31.31.156",
};

export const waitAndClick = async (selector: string) => {
    await page.waitForSelector(selector);
    return page.click(selector);
};

export const resetFormInputFocus = async () => {
    await page.click("form");
};

export const selectDropdownItem = async (selector: string, value: string | string[]) => {
    const values: string[] = !Array.isArray(value) ? [value] : value;

    await page.click(selector);
    for (const dataValue of values) {
        await page.waitFor(`[data-value='${dataValue}']`);
        await page.click(`[data-value='${dataValue}']`);
    }
    await page.click("form");
    await page.waitFor(500);
};

export const BASE_URL: string = URL_CONFIGS[APP];
