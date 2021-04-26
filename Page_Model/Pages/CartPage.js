import {Selector, t} from 'testcafe'
import CheckoutPage from '../Pages/CheckoutPage'

class CartPage{
    constructor(){
        this.cartPageHeader = Selector('.title')
        this.cartItem = Selector('.inventory_item_name')
        this.checkoutButton = Selector('#checkout')
    }
    async checkoutClick(){
        await t.click(this.checkoutButton)
        await t.expect(CheckoutPage.checkoutHeader.exists).ok()
    }
}

export default new CartPage()