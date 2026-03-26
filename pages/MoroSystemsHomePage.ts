import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async goToCareers() {
    const footerLink = this.page.locator('footer a.footer__title', { hasText: 'Kariéra' });

    await footerLink.scrollIntoViewIfNeeded();
    await footerLink.click();
  }
}