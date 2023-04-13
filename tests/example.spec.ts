import { test, expect } from '@playwright/test';
import { something } from './utils'

test('has title', async ({ page }) => {
  something()
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
