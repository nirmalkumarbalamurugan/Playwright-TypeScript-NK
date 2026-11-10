import { Page } from "@playwright/test";

export class CartPage{

    constructor(private page:Page) {}

        async ProductCartPage(){

        await this.page.locator("//button[@routerlink='/dashboard/cart']").click()

    const product = this.page.locator("//ul[@class='cartWrap ng-star-inserted']")
    await product.first().waitFor()
    const count = await product.count();
    console.log("Total products:",count)

    if(count === 3)
    {
        console.log("3 products are available. Continue to shipping")
        await this.page.locator("//li//button[@type='button']").click()
    }
   else
    {
        console.log("please add minimum 3 products")
        await this.page.locator("//button[@routerlink='/dashboard']").click()
        
        throw new Error(`Minium 3 products ${count}`)
    }  
        }

        
    }