
import { BASE_URL, waitAndClick } from "../utils";

export class IssuePage {
    issuePath = BASE_URL + "/issues";
    page;

    constructor(page) {
        this.page = page;
    }

    async open() {
        return this.page.goto(this.issuePath);
    }

    async getPage() {
        return this.page.waitForSelector("#js-repo-pjax-container");
    }

    async createAnIssue() {
        return waitAndClick('a[href*="/issues/new"]');
    }

    async newIssueBtn() {
        return this.page.waitForSelector('[class="btn btn-primary"]')
    }

}
