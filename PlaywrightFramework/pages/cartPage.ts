import { Page, Locator } from "@playwright/test";
export class CartPage{
    page:Page;
    productLabel:Locator;

    constructor(page:Page){
        this.page=page;
        this.productLabel=page.locator('.inventory_item_name');
    }
}