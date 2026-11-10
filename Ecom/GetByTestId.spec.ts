import {test} from "@playwright/test"

test("GetByTestId", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html")
    //data-testid="username"

    await page.getByTestId("username").fill("Nirmalkumar")

    await page.waitForTimeout(5000)
})