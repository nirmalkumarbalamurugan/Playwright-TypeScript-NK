import {test} from '@playwright/test'
test("Doubleclickmethod", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/software-request-dashboard.html")

    await page.locator("//td[text()='REQ001']/following-sibling::td[3]").dblclick()
    await page.waitForTimeout(5000)
    await page.locator(".edit-input").fill("approved")
    await page.waitForTimeout(5000)
    await page.locator(".edit-input").press("Enter")
    await page.waitForTimeout(5000)
})