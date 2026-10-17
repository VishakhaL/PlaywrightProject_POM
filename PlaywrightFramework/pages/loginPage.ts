import { Page, Locator } from '@playwright/test'
export class LoginPage {

    page: Page;
    userNameField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.userNameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
    async openApplication(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async doLogin() {
        await this.userNameField.fill('standard_user');
        await this.passwordField.fill('secret_sauce');
        await this.loginButton.click();
    }
}