import {test} from '@playwright/test'

test("DragAndDropMethod", async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/food-order-status-board.html")

    const sourceElement=page.getByText("Burger")

    const targetElement=page.getByText("DELIVERED")

    await sourceElement.dragTo(targetElement)

    await page.waitForTimeout(5000)

    const sourceElement1=page.getByText("Pizza")

    const targetElement1=page.getByText("COOKING")

    await sourceElement1.dragTo(targetElement1)
        await page.waitForTimeout(5000)


})