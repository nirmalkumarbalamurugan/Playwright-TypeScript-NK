import {test} from "@playwright/test"

test("Singledropdown", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/online-store.html")

    //payment
    //await page.locator('#payment').selectOption("Other UPI")

   // await page.locator('#payment').selectOption({index:3})
    await page.locator('#payment').selectOption({value:"PHONEPE"})

    await page.waitForTimeout(5000)
})