import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
  await page.setViewportSize({ width: 1920, height: 1080 });
});

test.afterEach(async () => {
  await page.close();
});

test('prototype1Add', async () => {
  // Select prototype version 1
  await page.selectOption('select[name="selectBuild"]', '1');

  // Get input fields using CSS selectors
  const firstNum = page.locator('input#number1Field');
  const secondNum = page.locator('input#number2Field');

  // Get operation dropdown
  const operation = page.locator('select#selectOperationDropdown');

  // Get calculate button
  const calculate = page.locator('input#calculateButton');

  const a = '25';
  const b = '11';

  // Fill in the input fields
  await firstNum.fill(a);
  await secondNum.fill(b);

  // Select Add operation
  await operation.selectOption('Add');

  // Click calculate button
  await calculate.click();

  // Wait for result to be calculated
  await page.waitForTimeout(2000);

  // Get the result value using page.evaluate
  const myresult = await page.evaluate(() => {
    const field = document.querySelector('#numberAnswerField') as HTMLInputElement;
    return field ? field.value : '';
  });
  console.log('Actual Result:', myresult);

  // Calculate expected result
  const input1 = parseInt(a);
  const input2 = parseInt(b);
  const expResult = input1 + input2;
  console.log('Expected Result:', expResult);

  // Assert the result
  expect(parseInt(myresult || '0')).toBe(expResult);
});

test('prototype1sub', async () => {
  // Select prototype version 1
  await page.selectOption('select[name="selectBuild"]', '1');

  // Get input fields using CSS selectors
  const firstNum = page.locator('input#number1Field');
  const secondNum = page.locator('input#number2Field');

  // Get operation dropdown
  const operation = page.locator('select#selectOperationDropdown');

  // Get calculate button
  const calculate = page.locator('input#calculateButton');

  const a = '25';
  const b = '11';

  // Fill in the input fields
  await firstNum.fill(a);
  await secondNum.fill(b);

  // Select Subtract operation
  await operation.selectOption('Subtract');

  // Click calculate button
  await calculate.click();

  // Wait for result to be calculated
  await page.waitForTimeout(2000);

  // Get the result value using page.evaluate
  const myresult = await page.evaluate(() => {
    const field = document.querySelector('#numberAnswerField') as HTMLInputElement;
    return field ? field.value : '';
  });
  console.log('Actual Result:', myresult);

  // Calculate expected result
  const input1 = parseInt(a);
  const input2 = parseInt(b);
  const expResult = input1 - input2;
  console.log('Expected Result:', expResult);

  // Assert the result
  expect(parseInt(myresult || '0')).toBe(expResult);
});
