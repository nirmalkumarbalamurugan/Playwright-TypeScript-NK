import {test} from "@playwright/test"
test("Open the entertainment",async ({page})=>{
    await page.goto("https://youtube.com/")
    const titleofapplication=await page.title();
    console.log(titleofapplication)
})