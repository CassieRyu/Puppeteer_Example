# Puppeteer_Example
Framework: Jest and Puppeteer for web functional test. Using jest-image-snapshot for visual testing.

## Environment
```
> npm install
```
## Structure
* `jest.config.js` is main config file;
* `image_setup.js` is visual testing config file with jest-image-snapshot;
## Execution
* ```npm run test``` for test scripts execution;
* test environment can be changed in `TEST_ENV` command;
* ```npm run update``` for updating image baseline;
