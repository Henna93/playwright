import { test, expect } from '@playwright/test';

test('Search mobile phone on Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com');

  // Verify Amazon homepage loaded
  await expect(page).toHaveTitle(/Amazon/);

  // Search for mobile phone
  await page.fill('#twotabsearchtextbox', 'mobile phone');
  await page.click('#nav-search-submit-button');

  // Validate search results loaded
  await expect(page).toHaveTitle(/mobile phone/i);
  await expect(page.locator('#twotabsearchtextbox')).toHaveValue('mobile phone');
});

