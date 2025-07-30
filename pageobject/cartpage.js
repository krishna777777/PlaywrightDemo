// cartpage.js
class CartPage {
    constructor(page) {
        this.page = page;
        this.cardTitles = page.locator("//div[@class='card-body']//b");
    }

    async countProductsAndAdd() {
        const count = await this.cardTitles.count();
        for (let i = 0; i < count; i++) {
            const text = await this.cardTitles.nth(i).textContent();
            if (text === 'ADIDAS ORIGINAL') {
                const addToCartButton = this.page.locator(`//div[@class='card-body']//b[text()='${text}']/parent::h5/parent::div//button//i[@class='fa fa-shopping-cart']`);
                await addToCartButton.click();
                break;
            }
        }
    }
}

module.exports = { CartPage };
