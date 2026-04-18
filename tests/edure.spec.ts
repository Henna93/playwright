import { test, expect } from '@playwright/test';

test('Launch edure.in website', async ({ page }) => {
  await page.goto('https://edure.in');

  // Verify the site loaded
  await expect(page).toHaveURL(/edure\.in/);
  await expect(page).toHaveTitle(/edure/i);
});

test.only('Click Start Learning on edure.in and verify navigation', async ({ page }) => {
  await page.goto('https://edure.in');
  await page.click('text=Start Learning');
  await expect(page).not.toHaveURL(/edure\.in$/);

  await page.locator  

});
