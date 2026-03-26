import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async goToCareers() {
    await this.page.locator('header').getByRole('link', { name: 'Kariéra' }).click();
  }
}