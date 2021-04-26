import {CREDENTIALS} from '../Data/Const'
import LoginPage from '../Pages/LoginPage'
import ProductsPage from '../Pages/ProductsPage'
import CartPage from '../Pages/CartPage'

fixture('Cart Page Scenarios')
.page `https://www.saucedemo.com/`
.beforeEach(async t=>{
    await t 
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USER, CREDENTIALS.STANDARD_USER.PSWD)
    await t.expect(ProductsPage.pageHeader.exists).ok()
})

test.only('Add Multiple Items to the shopping cart', async t=>{
    for(let i = 0; i <= 5; i++){
    await t
        ProductsPage.addMultipleProducts(i)
    }
        ProductsPage.clickCartbutton()
    await t
        .expect(CartPage.cartPageHeader.innerText).eql('YOUR CART') 
    for(let i = 3; i <= 8; i++){ 
        await t.expect(await ProductsPage.validateProductsAdded(i)).ok()
    }
})

test('Add Onesie Product to the shopping cart', async t=>{
    await t
        ProductsPage.addOnesieProduct()
    await t
    .expect(CartPage.cartPageHeader.exists).ok()
    .expect(ProductsPage.validateOnesie).ok()
})