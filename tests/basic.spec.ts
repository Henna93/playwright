import { test, expect } from '@playwright/test';

test('open facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Expect the page to have "Facebook" in the title
  await expect(page).toHaveTitle(/Facebook/);
});

test('facebook login input is visible using locator', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  const emailInput = page.locator('input[name="email"]');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('123@gmail.com');
});


