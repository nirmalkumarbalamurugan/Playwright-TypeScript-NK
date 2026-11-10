import {test} from "@playwright/test"

test("GetByTitle", async({page})=>{
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html")
    //title="iPhone 15 Pro"
    await page.getByTitle("iPhone 15 Pro").click()

    await page.waitForTimeout(5000)
})