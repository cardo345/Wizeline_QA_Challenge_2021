import {Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.loginLogo = Selector('.login_logo')
        this.errorMessage = Selector('h3')
    }

    async submitLogin(username, password){
        await t
            .typeText(this.usernameField, username,{paste:true})
            .typeText(this.passwordField, password,{paste:true})
            .click(this.loginButton)
    }
    async submitLoginNoUsername(password){
        await t
            .typeText(this.passwordField, password,{paste:true})
            .click(this.loginButton)
    }
    async submitLoginNoPswd(username){
        await t
            .typeText(this.usernameField, username,{paste:true})
            .click(this.loginButton)
    }
}

export default new LoginPage()