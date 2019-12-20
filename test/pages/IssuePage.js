import { Page } from "puppeteer";
import { BASE_URL, waitAndClick } from "../utils";

export class IssuePage {
    issuePath = BASE_URL + "/issues";
    page = new Page;

    constructor(page) {
        this.page = page;
    }

    async open() {
        return this.page.goto(this.issuePath);
    }

    async createAnIssue() {
        return this.page.waitAndClick('a[href*="/issues/new"]');
    }

    async newIssueBtn() {
        return this.page.waitForSelector('[class="btn btn-primary"]')
    }
}
