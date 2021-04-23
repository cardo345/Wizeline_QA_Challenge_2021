import {CREDENTIALS} from '../Data/Const'
import LoginPage from '../Pages/LoginPage'
import ProductsPage from '../Pages/ProductsPage'

fixture('Products Page Scenarios')
.page `https://www.saucedemo.com/`

test('Sort products from', async t=>{
    await t
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USER, CREDENTIALS.STANDARD_USER.PSWD)
        await t.expect(ProductsPage.pageHeader.exists).ok()
    await t
        ProductsPage.sortProducts()
    await t.expect(await ProductsPage.validateProducts()).ok()
})