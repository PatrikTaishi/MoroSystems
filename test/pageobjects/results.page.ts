import { $ } from '@wdio/globals'
import Page from './page.js';

class ResultsPage extends Page {

    public get searchResults() {
        return $('#search');
    }

    public get result() {
        return $('a[jsname="UWckNb"]');
    }

    public async clickResult() {
        await this.result.click();
    }
}

export default new ResultsPage();
