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

test('Add Multiple Items to the shopping cart', async t=>{
    var backpack = ProductsPage.backpackName.innerText
    var light = ProductsPage.lightName.innerText
    var shirt = ProductsPage.shirtName.innerText
    var fleeceJacket = ProductsPage.fleeceJacketName.innerText
    var onesie = ProductsPage.onesieName.innerText
    var redShirt = ProductsPage.redShirtName.innerText
    await t
        ProductsPage.addMultipleProducts()
        CartPage.validateCart(backpack,light,shirt,fleeceJacket,onesie,redShirt)
    await t
        .expect(CartPage.cartPageHeader.innerText).eql('YOUR CART')
})

test('Add Onesie Product to the shopping cart', async t=>{
    var onesie = ProductsPage.onesieName.innerText
    await t
        ProductsPage.addOnesieProduct()
    await t
    .expect(CartPage.cartPageHeader.exists).ok()
    .expect(CartPage.cartItem1.innerText).eql(await onesie)
})