require("expect-puppeteer");
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const customConfig = { threshold: 0 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    customDiffConfig: customConfig,
    failureThreshold: '0.01',
    failureThresholdType: 'percent'
});
expect.extend({ toMatchImageSnapshot });
