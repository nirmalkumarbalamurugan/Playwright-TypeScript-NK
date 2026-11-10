import {test} from '@playwright/test'

test("rightclickmethod", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/software-installation-dashboard.html")

    await page.getByText("Chrome").click({button:"right"})

    await page.waitForTimeout(5000)

    await page.getByText("Mark Pending").click()

    await page.waitForTimeout(5000)


})