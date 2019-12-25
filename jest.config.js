const config = {

    transform: {"\\.ts$": ['ts-jest']},
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "^test/(.*)$": "<rootDir>/$1",
    },
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
    ]
     // preset: "jest-puppeteer"

};
module.exports = config;


