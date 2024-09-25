import { $ } from '@wdio/globals'
import Page from './page.js';

class MoroPage extends Page {

    public get mainMenu() {
        return $('#menu-hlavni-menu');
    }
    public get career() {
        return $('//*[@id="menu-hlavni-menu"]/li[6]/a');
    }
    public get cookiesScript() {
        return $('#cookiescript_accept');
    }

    public async clickCareerTab() {
        await this.career.click();
    }

    public async acceptCookies() {
        await this.cookiesScript.click();
    }
}

export default new MoroPage();
