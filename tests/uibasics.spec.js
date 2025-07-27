
import { test , expect } from "@playwright/test";
import { assert } from "console";
import { TIMEOUT } from "dns";


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


test('proper login', async function login({page}) {
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

test ('UI Controls ', async function controls({page}){
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('input#username');
    const password = page.locator('input#password');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    
    await page.locator('input[type="radio"][value="user"] ~ span.checkmark').click();
    //to see if the radio button is checked or not 
    expect(await page.locator('input[type="radio"][value="user"] ~ span.checkmark').isChecked());
    await page.locator('#okayBtn').click();

    await expect(page.locator('a[class=blinkingText]')).toHaveAttribute('class','blinkingText');
    //  a new inspector gets opened in the browser
    await page.pause();
    








});


test('Window Handling', async function windowHandling({browser}){
    const content = await browser.newContext();
    const page = await content.newPage();


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const document_link = page.locator('a[class=blinkingText]');
    // we are capuring the windows same like window handles 
    // also we want the page to wait and then click on it parallelly as well . 
    // multiple steps need to executed asyncronously what will you do we need to use promise.all
    const [newpage] = await Promise.all([
        content.waitForEvent('page'),
        document_link.click()
    ]);
    await newpage.waitForLoadState('networkidle');
    let text = await newpage.locator("p[class='im-para red']").textContent()
    console.log(text)

    const parenttitle = await page.title()
    console.log(parenttitle)
    text = text.split('@')
    const email = text[1].split(" ")[0]
    console.log(email)

    await page.locator('input#username').fill(email);
    await page.locator('input#password').fill('learning');
    await page.pause();
    // to record the code which is done manually give npx playwright codegen https://rahulshettyacademy.com

    


    
    

    




});


test('E2E', async function e2e({browser}) {
    let context = await browser.newContext()
    const page = await context.newPage()
    page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('krishna124@gmail.com');
    await page.locator('#userPassword').fill('Abcd@1234');
    await page.locator('input[name=login]').click();
    // await page.pause();
    await page.waitForLoadState('networkidle');
    let k = await page.locator("//div[@class='card-body']//b").count()
    let orginsl = 'ADIDAS ORIGINAL';

    for (let i = 0; i<k;i++){

        let text = await page.locator("//div[@class='card-body']//b").nth(i).textContent();

        if (text=='ADIDAS ORIGINAL'){

            let new_locator = page.locator(`//div[@class='card-body']//b[text()='${text}']/parent::h5/parent::div//button//i[@class='fa fa-shopping-cart']`)
            new_locator.click()

        }




    }

    await page.locator("//button[@class='btn btn-custom']/i[@class ='fa fa-shopping-cart']").click()
    expect(await page.locator(`//h3[text()='${orginsl}']`).textContent()).toEqual(orginsl)
    // await page.pause();
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

test('exclusive locators', async function exclusive({browser}){
    let context = await browser.newContext({viewport:null});
    let page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    // there is a locator called getBy Role as well where we can get by role ie: buttons , checkboxes etc...
    await page.getByRole('button').click();
    const value = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    console.log(value);
    await page.getByRole("link",{name:"shop"}).click();
    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole('button').click();
    await page.pause();
});

test('calender', async function calender({browser})
{


    let context = await browser.newContext()
    let page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator("//div//input[@name='month']").fill("7")
    await page.locator("//div//input[@name='day']").fill("1")
    await page.locator("//div//input[@name='year']").fill("1999")
    await page.locator("//button[@class='react-date-picker__calendar-button react-date-picker__button']").click();
    await page.pause();



});

test('hidden', async function calender({browser})
{


    let context = await browser.newContext()
    let page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('input.inputs.displayed-class')).toBeVisible();
    await page.locator("//input[@value='Hide']").click();
    await expect(page.locator('input.inputs.displayed-class')).toBeHidden();
    // await page.pause();
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("//input[@value='Alert']").click();
    await page.locator('#mousehover').hover()
    await page.locator("//div[@class='mouse-hover-content']//a[text()='Top']").click();
    await page.pause();



});


test.only('frames', async function frames({browser})
{


    let context = await browser.newContext()
    let page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // switching to frames
    const framespage=  page.frameLocator("#courses-iframe");
    await framespage.locator("li a[href*='lifetime-access']:visible").click();
    let count = await framespage.locator(".text h2").textContent();
    count = count.split(' ')
    console.log(count[1])








});








