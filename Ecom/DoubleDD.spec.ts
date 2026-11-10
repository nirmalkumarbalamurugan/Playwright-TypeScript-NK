import {test} from '@playwright/test'

test("multipledropdown", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/jobapplicationform.html")

    //    await page.locator("#location").selectOption([{index:0},{index:2}])

    await page.locator("#location").selectOption([{value:"chicago"},{value:"miami"}])

    await page.waitForTimeout(5000)
})