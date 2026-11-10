import {test} from "@playwright/test"

test("GetByLabel1", async({page})=>{

await page.goto("https://www.google.com/")
//aria-label="Search"
await page.getByLabel("Search", {exact:true}).fill("youtube")

await page.waitForTimeout(5000)
})
test("GetByLabel2", async({page})=>{

await page.goto("https://www.w3schools.com/")
//aria-label="Search field"
await page.getByLabel("Search field", {exact:true}).fill("php tutorial")

await page.waitForTimeout(5000)
})
test("GetByLabel3", async({page})=>{

await page.goto("https://www.wikipedia.org/")
//Label for="searchInput"
await page.getByLabel("Search Wikipedia").fill("Nirmalkumar")

await page.waitForTimeout(5000)
})