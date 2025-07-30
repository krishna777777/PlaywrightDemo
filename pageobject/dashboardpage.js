const { expect } = require('@playwright/test');
class DashboadPage{

constructor (page)
{

    this.page = page;
    this.firstcontent = page.locator('h5>b').first();

    this.allcontents = page.locator('h5>b');


}

async allcontentsmeth(item){
    await this.page.waitForLoadState('networkidle');
    await expect(this.firstcontent).toContainText(item);
    const contents = await this.allcontents.allTextContents();
    console.log(contents)

}




}

module.exports = {DashboadPage}

