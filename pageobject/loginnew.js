class loginnew{

constructor (page){
    this.page = page 
    this.email = page.locator('#userEmail')
    this.password = page.locator('#userPassword')
    this.loginbutton = page.locator('input[name=login]')
}


async loginmeth(){
    await this.page.goto('https://rahulshettyacademy.com/client');
    await this.email.fill('krishna124@gmail.com');
    await this.password.fill('Abcd@1234');
    await this.loginbutton.click();

}


}

module.exports = {loginnew}
