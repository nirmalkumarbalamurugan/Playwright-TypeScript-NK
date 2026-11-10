import { Page } from "@playwright/test";

export class RegisterPage {
    constructor (private page:Page){}

    async RegisterUser(){
        await this.page.locator("#firstName").fill("Nirmalkumar");
        await this.page.locator("#lastName").fill("K B");
        await this.page.locator("#userEmail").fill("nirmalkumarb@gmail.com");
        await this.page.locator("#userMobile").fill("9715234471");

        await this.page.locator("//input[@value='Male']").check();

        await this.page.getByPlaceholder("Passsword").nth(0).fill("Exercise1@");

        await this.page.getByPlaceholder("Confirm Passsword").fill("Exercise1@");

        await this.page.locator("//input[@type='checkbox']").check();

        await this.page.locator("//input[@value='Register']").click();

        await this.page.getByText("Login").click();
        }
    }