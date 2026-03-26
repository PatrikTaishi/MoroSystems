import { Page } from '@playwright/test';
import { humanDelay } from '../utils/helpers';

export class GooglePage {
  constructor(private page: Page) { }

  async goto() {
    await humanDelay();
    await this.page.goto('https://google.com');
  }

  async search(query: string) {
    await this.page.fill('textarea[name="q"]', query);
    await humanDelay();
    await this.page.keyboard.press('Enter');
  }

  async clickMoroSystemsLink() {
    //old text: MoroSystems - užitečná IT řešení a technologické inovace
    await humanDelay();
    await this.page.click('a:has-text("MoroSystems - smysluplná IT řešení a technologické inovace")');
  }
}