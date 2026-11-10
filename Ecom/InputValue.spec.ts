import {test} from '@playwright/test'

test("Inputvalue", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

    const city_textbox=page.locator("#city")

    const value=await city_textbox.inputValue()
    const value1=await city_textbox.getAttribute("value")

    console.log("current city value is", value, value1)
    await page.waitForTimeout(5000)

    await page.locator('#city').fill("coimbatore")

    await page.waitForTimeout(5000)
    const value2=await city_textbox.inputValue()
    const value3=await city_textbox.getAttribute("value")

    console.log("current city value is", value2, value3)

    await page.waitForTimeout(5000)
})