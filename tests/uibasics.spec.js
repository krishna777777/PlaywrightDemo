
import { test , expect } from "@playwright/test";
import { assert } from "console";


test('First Playwright Test ' , async function demo({browser}) {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://google.com");
    let title = await page.title()
    console.log(title)
    expect(title).toBe('Google');
    await expect(page).toHaveTitle(/Google/);

});

test('Second Playwright Test ' , async function demo({page}) {

    // const context = await browser.newContext()
    // const page = context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // await expect(page).toHaveTitle(/YouTube/);

    // playwright supports css xpath selectors 
    // css selector it mostly suggests 
    // https://www.guru99.com/locators-in-selenium-ide.html




    await page.locator('input#username').fill("rahulshetty")
    await page.locator('input[id=password]').fill('learning')
    await page.locator('input[id=signInBtn]').click();
    const error = await page.locator('[style*=block]').textContent();
    console.log(error)
    await expect(page.locator('[style*=block]')).toContainText('Incorrect username/password.');







    
});


test.only('proper login', async function login({page}) {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const k = await page.locator('p[class*=text-center]').textContent()
    console.log(k)
    let parts = k.split(" ");
    let username = parts[2]; // "rahulshettyacademy"
    let password = parts[6]; // "learning"
    password = password.replace(/[^a-zA-Z0-9]/g, '');
    console.log(username)
    console.log(password)
    await page.locator('input#username').fill(username)
    await page.locator('input[id=password]').fill(password)
    await page.locator('#signInBtn').click()
    await page.waitForSelector('.card');
    await expect(page.locator('h4[class=card-title]>a').first()).toContainText('iphone X');
    const all = page.locator('h4[class=card-title]>a');
    let g = []
    const count = await all.count();

    for(let i = 0; i<count;i++){
        let text = await all.nth(i).textContent();
        g.push(text.trim());


    }

    console.log(g)





    






    


    
});


