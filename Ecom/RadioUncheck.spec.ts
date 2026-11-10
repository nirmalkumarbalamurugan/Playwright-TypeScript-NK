import {expect, test} from '@playwright/test'
test ("CheckAndUncheck", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

    await page.locator("//input[@value='Female']").check()

//await page.locator("#agreeCheck").check()
  //  await page.locator("#agreeCheck").uncheck()

  const checkuncheck=page.locator("#agreeCheck")

  await checkuncheck.check();
  await expect(checkuncheck).toBeChecked()

  await page.waitForTimeout(5000)

  await checkuncheck.uncheck();
  await expect(checkuncheck).not.toBeChecked()

    await page.waitForTimeout(5000)


})