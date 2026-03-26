import { Page } from '@playwright/test';

export async function acceptCookiesIfVisible(page: Page, buttonText: string, timeout: number = 10000) {
  const button = page.locator(`:is(button, [role="button"]):has-text("${buttonText}")`);
  try {
    await button.waitFor({ state: 'visible', timeout });
    await humanDelay(); 
    await button.click();
    console.log(`Clicked cookies button: "${buttonText}"`);
  } catch {
    console.log(`Cookies button "${buttonText}" not found, skipping.`);
  }
}

export async function humanDelay(ms: number = 2000) {
  await new Promise(resolve => setTimeout(resolve, ms));
}