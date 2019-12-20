// module.exports = {
//     globalSetup: './setup.js',
//     globalTeardown: './teardown.js',
//   //  testEnvironment: './puppeteer_env.js',
//     setupFilesAfterEnv: ["./image_setup.js"],
//     preset: "jest-puppeteer",
//     reporters: [
//         "default",
//         [
//             "./node_modules/jest-html-reporter",
//             {
//                 pageTitle: "e2e-test-report"
//             }
//         ]
//     ]
// };
//
// const config = {
//     setupFilesAfterEnv: ["<rootDir>/image_setup.js"],
//     testRegex: "./test/specs/.*.spec.js",
//     reporters: [
//         "default",
//         [
//             "./node_modules/jest-html-reporter",
//             {
//                 pageTitle: "e2e-test-report"
//             }
//         ]
//     ],
//     preset: "jest-puppeteer"
// };

const config = {

    globalSetup: "jest-environment-puppeteer/setup",
    globalTeardown: "jest-environment-puppeteer/teardown",
    testEnvironment: "jest-environment-puppeteer",
    setupFilesAfterEnv: ["<rootDir>/image_setup.js"],
    testRegex: "./test/specs/.*.spec.js",
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "e2e-test-report"
            }
        ]
    ],
    preset: "jest-puppeteer"

};
module.exports = config;


