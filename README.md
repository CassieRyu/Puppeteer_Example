# Puppeteer_Example
Framework: Jest and Puppeteer for web functional test. Using jest-image-snapshot for visual testing.
## Feature
* Combine visual testing
* Support different environments
* Run in docker

## Environment
```
> npm install
```
## Structure
* `jest.config.js` is main config file;
* `image_setup.js` is visual testing config file with jest-image-snapshot;
## Execution
* ```npm run test``` for test execution in local env;
* test environment can be changed in `TEST_ENV` command;
* ```npm run test:docker``` for test execution in docker;
* ```npm run update``` for updating image baseline in docker;
### Recommend to run in docker, image matching would be more stable
