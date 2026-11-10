import {test} from "@playwright/test"

test("NavigationMethod", async ({page})=>{

    await page.goto("https://www.google.com/")
    

    await page.getByText("Gmail").click()

    await page.waitForTimeout(5000)

    await page.goBack()
    await page.goForward()
    await page.waitForTimeout(5000)
    await page.reload()

    await page.waitForTimeout(5000)
})