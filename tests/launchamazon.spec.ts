import { test, expect } from '@playwright/test';

test('launch Amazon India', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.pause();
  await expect(page).toHaveURL(/amazon\.in/);
});
