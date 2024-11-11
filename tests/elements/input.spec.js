
const { test, expect } = require('@playwright/test');
test('Verify Normal input textbox', async ({ page }) => {
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
  let nomalInputXpath = `//*[@placeholder='Hello!']`;
  let expectText= "3";
  await page.locator(nomalInputXpath).fill(expectText);
  let expectedElementXpath = "//div[./span[normalize-space(text())='" +expectButton+ "']]";
  await expect(page.locator(expectedElementXpath)).toHaveText("Value: " + expectButton);
});

test('Verify input number textbox', async ({ page }) => {
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
  let inputNumberTextXpath = `//input[@autocomplete='off']`;
  let expectText= "3";
  await page.locator(inputNumberTextXpath).fill(expectText);
  let expectedElementXpath = "//div[./span[normalize-space(text())='" +expectButton+ "']]";
  await expect(page.locator(expectedElementXpath)).toHaveText("Value: " + expectButton);
});

test('Verify Text Area', async ({ page }) => {
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
  let textAreaXpath = `//textarea[@placeholder='Test with me!']]`;
  let expectText= "3";
  await page.locator(textAreaXpath).fill(expectText);
  let expectedElementXpath = "//div[./span[normalize-space(text())='" + expectButton + "']]";
  await expect(page.locator(expectedElementXpath)).toHaveText("Value: " + expectButton);
});

test('Verify Password box', async ({ page }) => {
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
  let passWordBoxXpath = `//input[@placeholder='Input password']`;
  let expectText= "3";
  await page.locator(passWordBoxXpath).fill(expectText);
  let expectedElementXpath = "//div[./span[normalize-space(text())='" + expectButton + "']]";
  await expect(page.locator(expectedElementXpath)).toHaveText("Value: " + expectButton);
});

test('Verify OTPbox', async ({ page }) => {
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
  let buttonNomalXpath = `//*[@placeholder='Hello!']`;
  let expectText= "3";
  await page.locator(buttonNomalXpath).fill(expectText);
  let expectedElementXpath = "//div[./span[normalize-space(text())='" + expectButton + "']]";
  await expect(page.locator(expectedElementXpath)).toHaveText("Value: " + expectButton);
});
