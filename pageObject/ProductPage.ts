import { Page } from "@playwright/test";

export class ProductPage{
    constructor(private page:Page){}

    async getallproducts(){

    await this.page.waitForLoadState("networkidle")
    await this.page.locator(".card-body").first().waitFor()
    const alltext=await this.page.locator(".card-body").allTextContents()
    console.log(alltext)
    }

    async productaddtocart(index:number){

        const products = [
        "ADIDAS ORIGINAL",
        "ZARA COAT 3",
        "iphone 13 pro"
    ];

    const productName = products[index]

    //const Continuepage = this.page.locator("//a[@class='continue']")
    await this.page.locator("//button[@class='btn w-40 rounded']").nth(index).click()
    const textContent=await this.page.locator(`//h2[normalize-space()='${productName}']`).textContent()
    console.log(textContent)
    await this.page.locator("//button[@class='btn btn-primary']").click()

    await this.page.locator("//a[@class='continue']").click()

    
    }


}