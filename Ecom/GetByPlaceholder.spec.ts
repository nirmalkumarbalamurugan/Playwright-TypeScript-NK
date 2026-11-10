import {test} from "@playwright/test"

test("getbyplaceholder", async({page})=>{

    await page.goto("https://www.yahoo.com/")

    //placeholder="Search the web"
    await page.getByPlaceholder("Search the web").fill("Tata motors")

    await page.waitForTimeout(5000)
})
test("getbyplaceholder2", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html")

    //placeholder="Enter your address"
    await page.getByPlaceholder("Enter your address").fill("NO 233, SPK Nagar, Kumarapalayam")

    await page.waitForTimeout(5000)
})