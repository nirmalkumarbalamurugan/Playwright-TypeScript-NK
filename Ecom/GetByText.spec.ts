import {test} from "@playwright/test"
test("locater text",async ({page})=>{
    await page.goto("http://google.com/")
    const Gmail_link=page.getByText("Gmail")
    await Gmail_link.click()
    await page.waitForTimeout(5000)

})
test("locater text open playwright",async ({page})=>{
    await page.goto("https://playwright.dev/")
    const playwright_tab=page.getByText("API", {exact:true})
    await playwright_tab.click()
    await page.waitForTimeout(5000)
})
test("locater text open youtube",async ({page})=>{
    await page.goto("https://www.w3schools.com/")
    const playwright_tab=page.getByText("Sign In", {exact:true}).nth(0)
    await playwright_tab.click()
    await page.waitForTimeout(5000)
})