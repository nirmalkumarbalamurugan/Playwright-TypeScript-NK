import {test} from "@playwright/test"

test("F&CMethod", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

    //placeholder="Enter Username"
    await page.getByPlaceholder("Enter Username").fill("Nirmalkumar")

    //placeholder="Enter Address"
    //await page.getByPlaceholder("Enter Address").fill("spk nagar kumarapalayam-638183")
    //await page.getByPlaceholder("Enter Address").fill(`spk nagar 
        //kumarapalayam-
        //638183`)
    //id="city"
    //await page.locator("#city").clear()
    
    const FCmethod=page.locator("#city")
    await FCmethod.clear()
    await FCmethod.fill("erode")
    //await FCmethod.fill("")

    await page.waitForTimeout(5000)
})