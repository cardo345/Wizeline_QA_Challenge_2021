import {CREDENTIALS} from '../Data/Const'
import LoginPage from '../Pages/LoginPage'
import ProductsPage from '../Pages/ProductsPage'
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import OverviewPage from '../Pages/OverviewPage'
import ConfirmationPage from '../Pages/ConfirmationPage'

fixture('Cart Page Scenarios')
.page `https://www.saucedemo.com/`

test('Complete the Purchase', async t=>{
    LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USER, CREDENTIALS.STANDARD_USER.PSWD)
    await t.expect(ProductsPage.pageHeader.exists).ok()
    ProductsPage.addMultipleProducts()
    await t.expect(CartPage.cartPageHeader.exists).ok()
    CartPage.checkoutClick()
    CheckoutPage.enterMailInfo(CREDENTIALS.MAIL_INFORMATION.FIRST, CREDENTIALS.MAIL_INFORMATION.LAST, CREDENTIALS.MAIL_INFORMATION.POSTAL)
    OverviewPage.finishPurchase()
    await t
        .expect(ConfirmationPage.confirmationTitle.innerText).eql('CHECKOUT: COMPLETE!')
        .expect(ConfirmationPage.confirmationHeader.innerText).eql('THANK YOU FOR YOUR ORDER')
        .expect(ConfirmationPage.confirmationText.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})