import {test} from '@playwright/test'

test("hovermethod",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/product-filter.html")



    await page.getByText("Category").hover() 

    await page.getByText("Electronics",{exact:true}).click()

    await page.waitForTimeout(5000)
})