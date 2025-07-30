class Loginpage {

constructor(page){

    
    this.page = page;
    this.signInButton = page.locator('input[name=login]');
    this.username = page.locator('#userEmail');
    this.password = page.locator('#userPassword');

}

async LandLogin(){
     await this.page.goto("https://rahulshettyacademy.com/client/");


}

async validLogin(username , password ){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();

}



}
module.exports = {Loginpage}
