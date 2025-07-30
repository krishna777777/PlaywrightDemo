const {test, expect} = require('@playwright/test')
const{Loginpage} = require('../pageobject/loginpage')
const {DashboadPage} = require('../pageobject/dashboardpage')

test('my program example', async function hello({page}) {
    
   
    const username = 'krishna124@gmail.com'
    const password = 'Abcd@1234'
    const item = 'ZARA'
    const loginpage = new Loginpage(page)
    await loginpage.LandLogin();
    await loginpage.validLogin(username,password)

    const dashpage = new DashboadPage(page)
    await dashpage.allcontentsmeth(item)




    

    // await page.waitForLoadState('networkidle');
    // await expect(page.locator('h5>b').first()).toContainText('ZARA COAT 3')
    // const contents = await page.locator('h5>b').allTextContents()
    // console.log(contents)

    

    
});
