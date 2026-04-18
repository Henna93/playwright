import { test, expect } from '@playwright/test';

test('Launch Automation Demo Site Register page', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Verify the page loaded
  await expect(page).toHaveURL(/Register\.html/);
  await expect(page).toHaveTitle(/Register/i);
});
test('Fill the registration form on Automation Demo Site', async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Register.html');
await page.fill('input[placeholder="First Name"]', 'John');
await page.fill('input[placeholder="Last Name"]', 'Doe');
await page.fill('textarea[ng-model="Adress"]', '123 Main St, Anytown, USA');
await page.fill('input[type="email"]', 'john.doe@example.com'); 
await page.fill('input[type="tel"]', '1234567890');
// await page.pause();
});
test('check radio button', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.click('input[value="Male"]');
  await expect(page.locator('input[value="Male"]')).toBeChecked();
 // await page.pause();
});
test('check checkboxes', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.click('input[type="checkbox"][value="Cricket"]');
  await expect(page.locator('input[type="checkbox"][value="Cricket"]')).toBeChecked();
 // await page.pause();
});
test('logo is visible', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  const logo = page.locator('img[id="imagetrgt"]');
  await expect(logo).toBeVisible();
});
test('select skills from dropdown', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.selectOption('#Skills', 'Java');
  const selectedOption = await page.$eval('#Skills', (select) => select.value);
  await expect(selectedOption).toBe('Java');
 // await page.pause();
});
