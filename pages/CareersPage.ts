import { Page, expect } from '@playwright/test';

export class CareersPage {
  constructor(private page: Page) { }

  async filterByCity(city: string) {
    const dropdown = this.page.locator('div.inp-custom-select');
    await dropdown.click();

    const optionsWrapper = this.page.locator('div.inp-custom-select__wrapper');
    await optionsWrapper.waitFor({ state: 'visible', timeout: 5000 });

    const cityOption = optionsWrapper.locator(`label[data-filter="${city}"]`);
    await cityOption.click();
  }

  get jobsContainer() {
    return this.page.locator('ul.c-positions__wrap');
  }

  get jobs() {
    return this.jobsContainer.locator('li');
  }

  async validateResults(city?: string) {
    await this.jobsContainer.waitFor({ state: 'visible', timeout: 15000 });

    await expect(this.jobs.first()).toHaveCount(1, { timeout: 15000 });

    if (city) {
      const citySpan = this.jobs.locator(`span:has-text("${city}")`);
      await expect(citySpan.first()).toBeVisible({ timeout: 15000 });
    }
  }
}