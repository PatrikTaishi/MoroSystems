import { test, expect } from '@playwright/test';
import { GooglePage } from '../../pages/GooglePage';
import { HomePage } from '../../pages/MoroSystemsHomePage';
import { CareersPage } from '../../pages/CareersPage';
import { humanDelay, acceptCookiesIfVisible } from '../../utils/helpers';

test.describe('MoroSystems GUI Testing', () => {

  test('Visit career page and filter available positions', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    let google: GooglePage;
    let home: HomePage;
    let careers: CareersPage;

    await test.step('1: Open the Browser', async () => {
      // handled automatically in PW
    });

    await test.step('2: Navigate to Google', async () => {
      google = new GooglePage(page);
      await google.goto();
      await humanDelay();
      await acceptCookiesIfVisible(page, 'Prijať všetko');
    });

    await test.step('3: Search for "MoroSystems"', async () => {
      await humanDelay();
      await google.search('MoroSystems.cz');
    });

    await test.step('4: Display Search Results', async () => {
      const results = page.locator('h3');
      await expect(results.first()).toBeVisible({ timeout: 30000 });
      await expect(page.url()).toContain('search?');
    });

    await test.step('5: Navigate to MoroSystems website', async () => {
      await google.clickMoroSystemsLink();
      await expect(page).toHaveURL(/morosystems/);
    });

    await test.step('6: Visit the "Kariéra" Page', async () => {

      home = new HomePage(page);

      await page.waitForLoadState('networkidle');

      await acceptCookiesIfVisible(page, 'Přijmout vše');

      await home.goToCareers();

      await expect(page).toHaveURL(/kariera/);
    });

    await test.step('7: Filter Available Positions Results', async () => {
      careers = new CareersPage(page);

      const city = 'Brno';
      await careers.filterByCity(city);
      await careers.validateResults(city);
    });

    await context.close();
  });
});