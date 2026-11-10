import {test} from "@playwright/test"

test("GetByAltText", async({page})=>{
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/online-mobile-store.html")
    //alt="Online Mobile Store"
    await page.getByAltText("Online Mobile Store").click()

    await page.waitForTimeout(5000)
})