const getConfig = require("jest-puppeteer-docker/lib/config");

const baseConfig = process.env.DOCKER ? getConfig() : {};
const debug = !!process.env.E2E_DEBUG;

const customConfig = {
    launch: {
        defaultViewport: {
            width: 1440,
            height: 1080
        },
        args: ["--disable-setuid-sandbox", "--no-sandbox", "--disable-dev-shm-usage", "–ignore-certificate-errors"],
        ignoreHTTPSErrors: true,
        dumpio: true,
        headless: !debug,
        slowMo: debug ? 100 : 0,
        devtools: debug,
    },
    // Starts a server before your Jest tests and tears it down after. - like mock server
    // server: {
    //     command: "node ./scripts/serve.js",
    //     debug: true,
    //     launchTimeout: 50000,
    //     port: 3030,
    // }
};

module.exports = Object.assign(customConfig, baseConfig);