import { Page, expect } from "@playwright/test";

export class PaymentPage{
    constructor(private page : Page){}
async PaymentDetailsPage(){

    await this.page.getByPlaceholder("Select Country").pressSequentially("ind")
        const dropdown = this.page.locator(".ta-results")
       await dropdown.waitFor()
    
        await this.page.locator("(//button[@class='ta-item list-group-item ng-star-inserted'])[2]").click()
    
        await this.page.locator("//a[@class='btnn action__submit ng-star-inserted']").click()
    
        
        await expect(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
        const OrderIdDetails=await this.page.locator(".em-spacer-1 .ng-star-inserted").allTextContents()
        
        for(const id of OrderIdDetails)
            console.log(id.trim())
}
 async OrderHistoryPage(){
    const AfterOrder=this.page.getByText(" Orders History Page ")
    await AfterOrder.click()
    console.log("Go to the Orders History page")
 }
}