import { test, expect } from '@playwright/test';

test('Launch Practice Test Automation login page', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Verify the page loaded
  await expect(page).toHaveURL(/practice-test-login/);
  await expect(page).toHaveTitle(/Test Login.*Practice Test Automation/i);
  await console.log(await page.title());
});
test('verify login with valid credentials', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
});
test('verify login with invalid credentials', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'invaliduser');
    await page.fill('#password', 'invalidpassword');
    await page.click('#submit');
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Your username is invalid!');
});
test('verify logout', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    await page.click('text=Log out');
    await expect(page).toHaveURL(/practice-test-login/);
});

