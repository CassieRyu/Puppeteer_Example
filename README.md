# Puppeteer_Example
Framework: Jest and Puppeteer for web functional test. Using jest-image-snapshot for visual testing.

## Framework
```$ npm i jest```
```$ npm i puppeteer```
```$ npm i jest-image-snapshot```
## Structure
`jest.config.js` is main config file;
`setup.js` , `teardown.js` and `puppeteer_env.js` are config files for puppeteer global;
`image_setup.js` is visual testing config file with jest-image-snapshot;
## Execution
```npm run test``` for test scripts execution;
```npm run update``` for updating image baseline;
