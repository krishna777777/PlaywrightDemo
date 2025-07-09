const {test} = require('@playwright/test');

test('First Playwright Test ' , async function demo({browser}) {

    const context = await browser.newContext()
    const page = context.newPage()

    await page.goto("https://google.com");


    




});

test('Second Playwright Test ' , async function demo({page}) {

    // const context = await browser.newContext()
    // const page = context.newPage()

    await page.goto("https://www.yotube.com");
    


    




});


