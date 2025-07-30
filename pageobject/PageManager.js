const { loginnew } = require('./loginnew');
const { CartPage } = require('./cartpage');

class PageManager {
    constructor(page) {
        this.page = page;
        this._loginPage = null;
        this._cartPage = null;
    }

    getLoginPage() {
        if (!this._loginPage) {
            this._loginPage = new loginnew(this.page);
        }
        return this._loginPage;
    }

    getCartPage() {
        if (!this._cartPage) {
            this._cartPage = new CartPage(this.page);
        }
        return this._cartPage;
    }
}

module.exports = { PageManager };
