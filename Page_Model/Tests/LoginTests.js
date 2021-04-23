import {CREDENTIALS} from '../Data/Const'
import LoginPage from '../Pages/LoginPage'
import ProductsPage from '../Pages/ProductsPage'

fixture ('Login Test Scenarios')
.page `https://www.saucedemo.com/`

test('Log in with Valid user', async t=>{
    await t
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USER, CREDENTIALS.STANDARD_USER.PSWD)
    await t.expect(ProductsPage.pageHeader.exists).ok()
})

test('Login with Locked out username', async t=>{
    await t
        LoginPage.submitLogin(CREDENTIALS.LOCKED_USER.USERNAME, CREDENTIALS.STANDARD_USER.PSWD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Sorry, this user has been locked out.')
})

test('Login with Invalid username', async t=>{
    await t
        LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.STANDARD_USER.PSWD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test('Login with no username', async t=>{
    await t
        LoginPage.submitLoginNoUsername(CREDENTIALS.STANDARD_USER.PSWD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username is required')
})

test('Login with no password', async t=>{
    await t
        LoginPage.submitLoginNoPswd(CREDENTIALS.STANDARD_USER.USER)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Password is required')
})

test('Logout from Products Page', async t=>{
    await t
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USER, CREDENTIALS.STANDARD_USER.PSWD)
        ProductsPage.logoutUser()
    await t
        .expect(LoginPage.loginLogo.exists).ok()
})
