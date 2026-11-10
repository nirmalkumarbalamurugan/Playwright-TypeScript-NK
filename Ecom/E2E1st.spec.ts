import {test, expect } from '@playwright/test'
import { RegisterPage } from '../pageObject/RegisterPage'
import { LoginPage } from '../pageObject/LoginPage'
import { ProductPage } from '../pageObject/ProductPage'
import { CartPage } from '../pageObject/CartPage'
import { PaymentPage } from '../pageObject/PaymentPage'

test ("Rs login page", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    
    await page.locator(".login-wrapper-footer-text").click()

    const Continuepage = page.locator("//a[@class='continue']")
    const Usermail=page.locator("#userEmail")
    //register page
    
    const register = new RegisterPage(page)
    await register.RegisterUser()
/*    await page.locator("#firstName").fill("Nirmalkumar")
    await page.locator("#lastName").fill("K B")
    await Usermail.fill("nirmalkumarb@gmail.com")
    await page.locator("#userMobile").fill("9715234471")
    await page.locator("//Input[@Value='Male']").check()
    await page.getByPlaceholder("Passsword").nth(0).fill("Exercise1@")
    await page.getByPlaceholder("Confirm Passsword").fill("Exercise1@")
    await page.locator("//Input[@type='checkbox']").check()
    await page.locator("//Input[@value='Register']").click()
    await page.getByText("Login").click()  */

    //login page
    //await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const login = new LoginPage(page)
    await login.loginpage()
    /* await Usermail.fill("nirmalkumarb@gmail.com")
    await page.locator("#userPassword").fill("Exercise1@")
    await page.locator("#login").click()
 */
    //all produt view page
    /* await page.waitForLoadState("networkidle")
    await page.locator(".card-body").first().waitFor()
    const alltext=await page.locator(".card-body").allTextContents()
    console.log(alltext) */
    const products = new ProductPage(page)
    await products.getallproducts()
      
    
    //product view page
    /* await page.locator("//button[@class='btn w-40 rounded']").nth(0).click()
    const textContent=await page.locator("(//h2[normalize-space()='ADIDAS ORIGINAL'])[1]").textContent()
    console.log(textContent)
    await page.locator("//button[@class='btn btn-primary']").click()

    //await page.locator("//a[@class='continue']").click()
    await Continuepage.click()

    await page.locator("//button[@class='btn w-40 rounded']").nth(1).click()
    const textContent1=await page.locator("//h2[contains(.,'ZARA COAT 3')]").textContent()
    console.log(textContent1)
    await page.locator("//button[@class='btn btn-primary']").click()

    await Continuepage.click()

    await page.locator("//button[@class='btn w-40 rounded']").nth(2).click()
    const textContent2=await page.locator("//h2[contains(.,'iphone 13 pro')]").textContent()
    console.log(textContent2)
    await page.locator("//button[@class='btn btn-primary']").click()

    await Continuepage.click() */
    const productcart = new ProductPage(page)
    await products.productaddtocart(0)
    await products.productaddtocart(1)
    await products.productaddtocart(2)  

 
    /* await page.locator("//button[@routerlink='/dashboard/cart']").click()

    const product = page.locator("//ul[@class='cartWrap ng-star-inserted']")
    await product.first().waitFor()
    const count = await product.count();
    console.log("Total products:",count)

    if(count === 3)
    {
        console.log("3 products are available. Continue to shipping")
        await page.locator("//li//button[@type='button']").click()
    }
   else
    {
        console.log("please add minimum 3 products")
        await page.locator("//button[@routerlink='/dashboard']").click()
        
        throw new Error(`Minium 3 products ${count}`)
    }   */

    const ViewCart = new CartPage(page)
    await ViewCart.ProductCartPage()
    
    //await page.pause()
    /* await page.getByPlaceholder("Select Country").pressSequentially("ind")
    const dropdown = page.locator(".ta-results")
   await dropdown.waitFor()

    await page.locator("(//button[@class='ta-item list-group-item ng-star-inserted'])[2]").click()

    await page.locator("//a[@class='btnn action__submit ng-star-inserted']").click()

    
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    const OrderIdDetails=await page.locator(".em-spacer-1 .ng-star-inserted").allTextContents()
    
    for(const id of OrderIdDetails)
        console.log(id.trim()) */

    const paymentfinal = new PaymentPage(page)
    await paymentfinal.PaymentDetailsPage()

/* //After order successfull
const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("Click To Download Order Details in CSV").click()

])
await download.saveAs("D:/"+download.suggestedFilename()) */
    /* const AfterOrder=page.getByText(" Orders History Page ")
    await AfterOrder.click()
    console.log("Go to the Orders History page") */
    await paymentfinal.OrderHistoryPage()

    //blinking text
    await page.locator(".blinkingText").click()
    await page.pause()

    //await page.waitForTimeout(5000)
})

