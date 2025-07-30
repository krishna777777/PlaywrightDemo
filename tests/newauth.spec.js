import { test , expect } from "@playwright/test";
import { assert } from "console";
import { TIMEOUT } from "dns";
import { loginnew } from "../pageobject/loginnew";
import {CartPage } from "../pageobject/cartpage";
import { PageManager } from "../pageobject/PageManager";
test('E2E', async function e2e({browser}) {
    let context = await browser.newContext()
    const page = await context.newPage()
    const manager = new PageManager(page);
    await manager.getLoginPage().loginmeth();

    await page.waitForLoadState('networkidle');
    await manager.getCartPage().countProductsAndAdd();
    let orginsl = 'ADIDAS ORIGINAL';
    await page.locator("//button[@class='btn btn-custom']/i[@class ='fa fa-shopping-cart']").click()
    expect(await page.locator(`//h3[text()='${orginsl}']`).textContent()).toEqual(orginsl)
    await page.locator("//button[text()='Checkout']").click();

    await page.locator("//input[@placeholder='Select Country']").type('Ind');
    await page.keyboard.press('Enter');
    await page.waitForSelector("//button[@class='ta-item list-group-item ng-star-inserted']/span");
    let c = await page.locator("//button[@class='ta-item list-group-item ng-star-inserted']/span").count()
    console.log("krishna",c);

    for (let i=0; i<c;i++){

        let spanLocator = await page.locator("//button[@class='ta-item list-group-item ng-star-inserted']/span").nth(i);
        let r = await spanLocator.textContent();
        r = r.trim();
        console.log(r);

        if (r =='India')
        {
           await spanLocator.click();
           break;
        }

    }

    let z = 'krishna124@gmail.com'

    const m = await page.locator(`//label[text()='${z}']`).textContent()

    const j = await page.locator("//div[@class='user__name mt-5']/input").inputValue()

    expect(m.trim()).toBe(j.trim())
    await page.locator("//a[@class='btnn action__submit ng-star-inserted']").click();
    console.log(page.locator("h1[class=hero-primary]").textContent())
    
    await expect(page.locator("h1[class=hero-primary]")).toContainText("Thankyou for the order.");
    let order_id = await page.locator('td[class=em-spacer-1]>label.ng-star-inserted').textContent();
    console.log("the order id is" ,order_id);
    order_id = order_id.replace(/\|/g, '').trim();

    console.log("the order id is" ,order_id);
    await page.locator('button.btn.btn-custom>i.fa.fa-handshake-o').click();

    await page.waitForSelector("//tr[@class='ng-star-inserted']//th");
    let oid_count = await page.locator("//tr[@class='ng-star-inserted']//th").count();
    let tr =0

    for (let i=0 ;i<oid_count;i++){

        let id = await page.locator("//tr[@class='ng-star-inserted']//th").nth(i).textContent();
        if (id.trim() ==order_id)
        {
           tr+=1
        }
    }

   expect(tr).toBeGreaterThanOrEqual(1); 
});

