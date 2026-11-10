import { Page } from "@playwright/test";

export class LoginPage{
    constructor(private page:Page){}

    async loginpage(){

    await this.page.locator("#userEmail").fill("nirmalkumarb@gmail.com");
    await this.page.locator("#userPassword").fill("Exercise1@")
    await this.page.locator("#login").click()

    }
}