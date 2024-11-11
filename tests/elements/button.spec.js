
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


test(`Verify select all checkbox`, async ({ page }) => {
  // test case check hay ko check 
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/checkbox');
  //Select Apple checkbox
  await page.locator(buildCheckboxXpath('Apple')).setChecked(true);
  //Select Pear checkbox
  await page.locator(buildCheckboxXpath('Pear')).setChecked(true);
  //Select Orange checkbox
  await page.locator(buildCheckboxXpath('Orange')).setChecked(true);
  //Verify Slected value
  let selectedValueXpath =`//div[normalize-space(text())='Selected values: ']`;
  await expect(page.locator(expectedElementXpath)).toHaveText(`Seleted values: Apple Pear Orange`);
  

});

function buildCheckboxXpath(label){
  return `//label[./span[normalize-space(text())='${label}']]`

}


test(`Verify select all checkbox version 2`, async ({ page }) => {
  // test case check hay ko check 
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/checkbox');
  //
  let isAppleChecked = await page.locator(buildCheckboxXpath('Apple')).isChecked();
  if(!isAppleChecked){
    await page.locator(buildCheckboxXpath('Apple')).click();
  }
  let isPearChecked = await page.locator(buildCheckboxXpath('Pear')).isChecked();
  if(!isPearChecked){
    await page.locator(buildCheckboxXpath('Pear')).click();
  }
  let isOrangeChecked = await page.locator(buildCheckboxXpath('Orange')).isChecked();
  if(!isOrangeChecked){
    await page.locator(buildCheckboxXpath('Orange')).click();
  }
  //Verify Slected value
  let selectedValueXpath =`//div[normalize-space(text())='Selected values: ']`;
  await expect(page.locator(expectedElementXpath)).toHaveText(`Seleted values: Apple Pear Orange`);

});


async function selectCheckboxByLabel(label,page){
  let isChecked = await page.locator(buildCheckboxXpath(label)).isChecked();
  if(!isChecked){
    await page.locator(buildCheckboxXpath(label)).click();
}



test(`Verify select all checkbox version 2_Rut_gon`, async ({ page }) => {
  // test case check hay ko check 
  await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/checkbox');
  await selectCheckboxByLabel('Apple',page);
  await selectCheckboxByLabel('Pear',page);
  await selectCheckboxByLabel('Orange',page);
  //Verify Slected value
  let selectedValueXpath =`//div[normalize-space(text())='Selected values: ']`;
  await expect(page.locator(expectedElementXpath)).toHaveText(`Seleted values: Apple Pear Orange`);

});
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
