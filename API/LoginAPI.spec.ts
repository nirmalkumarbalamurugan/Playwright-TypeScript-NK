import { test, expect } from '@playwright/test';

test("Login API Testing", async ({ request }) => {

    const response = await request.post(
        "https://eventhub.rahulshettyacademy.com/login",
        {
            data: {
                userEmail: "student@example.com",
                userPassword: "secret123"
            }
        }
    )

       

})