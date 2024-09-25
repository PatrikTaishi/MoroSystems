import { $ } from '@wdio/globals'
import Page from './page.js';

class SearchPage extends Page {

    public get inputSearch() {
        return $('#APjFqb');
    }

    public get btnSubmit() {
        return $('input[type="submit"]');
    }

    public get btnAcceptCookies() {
        return $('#L2AGLb');
    }

    public async search(username: string) {
        await this.inputSearch.setValue(username);
        await this.btnSubmit.click();
    }

    public async acceptCookies() {
        await this.btnAcceptCookies.click();
    }

    public open(path:string) {
        driver.maximizeWindow();
        return super.open(path);
    }
}

export default new SearchPage();
