const {test, expect} = require('@playwright/test')


test('my program example', async function hello({page}) {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('krishna124@gmail.com');
    await page.locator('#userPassword').fill('Abcd@1234');
    await page.locator('input[name=login]').click();
    // playwright will wait untill all the API calls are made 
    //network idle means it will wait untill the network calls are completed 

    await page.waitForLoadState('networkidle');
    await expect(page.locator('h5>b').first()).toContainText('ZARA COAT 3')
    const contents = await page.locator('h5>b').allTextContents()
    console.log(contents)

    

    
});
