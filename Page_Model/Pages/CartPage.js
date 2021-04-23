import {Selector, t} from 'testcafe'

class CartPage{
    constructor(){
        this.cartPageHeader = Selector('.title')
        this.cartItem1 = Selector('.cart_list .cart_item:nth-child(3) .inventory_item_name')
        this.cartItem2 = Selector('.cart_list .cart_item:nth-child(4) .inventory_item_name')
        this.cartItem3 = Selector('.cart_list .cart_item:nth-child(5) .inventory_item_name')
        this.cartItem4 = Selector('.cart_list .cart_item:nth-child(6) .inventory_item_name')
        this.cartItem5 = Selector('.cart_list .cart_item:nth-child(7) .inventory_item_name')
        this.cartItem6 = Selector('.cart_list .cart_item:nth-child(8) .inventory_item_name')
        this.checkoutButton = Selector('#checkout')
    }
    async validateCart(backpack,light,shirt,fleeceJacket,onesie,redShirt){
        await t
            .expect(this.cartItem1.innerText).eql(await backpack)
            .expect(this.cartItem2.innerText).eql(await light)
            .expect(this.cartItem3.innerText).eql(await shirt)
            .expect(this.cartItem4.innerText).eql(await fleeceJacket)
            .expect(this.cartItem5.innerText).eql(await onesie)
            .expect(this.cartItem6.innerText).eql(await redShirt)
    }
    async checkoutClick(){
        await t
            .click(this.checkoutButton)
    }
}

export default new CartPage()