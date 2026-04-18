import { test, expect } from '@playwright/test';

test('launch Guru99 upload page', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/upload/');
  await expect(page).toHaveURL('https://demo.guru99.com/test/upload/');
  await expect(page).toHaveTitle(/Guru99/);
});
test.only('upload file', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/upload/');
  
  const filePath = 'C:\\Users\\Edure\\Desktop\\new.txt';
  const fileInput = page.locator('input[id="uploadfile_0"]').first();
  await fileInput.setInputFiles(filePath);
  await page.click('input[id="terms"]');
  await page.click('button[id="submitbutton"]');
  await page.pause();
 
  
});