import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {ProductListPage} from '../pages/productListPage'
import { CartPage } from '../pages/cartPage';


test("Validate Login Page",async({page})=>{

    const loginPage=new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})
test.only("Validate add to cart",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const plpPage = new ProductListPage(page);
    await plpPage.clickAddToBagButton();
    await expect(plpPage.shoppingCartBadge).toHaveText('1');
    await plpPage.clickCartIcon();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    const cartPage = new CartPage(page);
    await expect(cartPage.productLabel).toHaveText('Sauce Labs Backpack')

})

