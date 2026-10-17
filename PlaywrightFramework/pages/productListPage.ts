import{Page, Locator} from '@playwright/test'
export class ProductListPage{
    page:Page;
    addToCartButton:Locator;
    shoppingCartBadge:Locator;
    shoppingCartIcon:Locator;
    constructor(page:Page){
        this.page=page;
        this.addToCartButton=page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartBadge=page.locator('.shopping_cart_badge');
        this.shoppingCartIcon=page.locator('.shopping_cart_link');

    }
    async clickAddToBagButton(){
       await this.addToCartButton.click();
    }

    async clickCartIcon(){

        await this.shoppingCartIcon.click();
    }
}