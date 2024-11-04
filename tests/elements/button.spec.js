
const { test, expect } = require('@playwright/test');
[
  "Div button",
  "Origin button",
  "Default",
  "Primary",
  "Dashed",
  "Text",
  "Link",
  "Icon button"
].forEach(inputButtonLabel => {
  test(`Verify ${inputButtonLabel}`, async ({ page }) => {
    await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/button');
    let firstButtonXpathType=`//*[(@role='button') and .//text()[normalize-space()='${inputButtonLabel}']]`;
    let secondButtonXpathType=`//button[.//text()[normalize-space()='${inputButtonLabel}']`;
    let thirstButtonXpathType=`//input[@type='button' and @value='${inputButtonLabel}']`;
    let divButtonXpath =`${firstButtonXpathType} | ${secondButtonXpathType} | ${thirstButtonXpathType}`;
    await page.locator(divButtonXpath).click();
    let expectedElementXpath =`//div[.//span[normalize-space(text())='${inputButtonLabel}']]`;
    await expect(page.locator(expectedElementXpath)).toHaveText(`Button ${inputButtonLabel} was clicked!`);
  });
})


// test('Verify button', async ({ page }) => {
//   await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/button');
//   let expectButton = "Div button";
//   let listButtons=["Div button", "Origin button", "Default", "Primary", "Dashed", "Text", "Link", "Icon button"];
//   let firstButtonXpath = `//button[normalize-space(text())='${expectButton}']`;
//   let secondButtonXpath = `//div[@role='button' and normalize-space(text())='${expectButton}']`;
//   let thirdButtonXpath = `//button[./span[normalize-space(text())='${expectButton}']]`;
//   let buttonXpath = `${firstButtonXpath} | ${secondButtonXpath} | ${thirdButtonXpath}`;
//   await page.locator(buttonXpath).click();
//   let expectedElementXpath = "//div[./span[normalize-space(text())='" + expectButton + "']]";
//   await expect(page.locator(expectedElementXpath)).toHaveText("Button " + expectButton + " was clicked!");
//   console.log(await page.textContent(expectedElementXpath));
// });

//Su dung type = button vaf text
//