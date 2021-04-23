import {Selector, t} from 'testcafe'
import CartPage from 'testcafe'

class ProductsPage{
    constructor(){
        this.pageHeader = Selector('.title')
        this.sortButton = Selector('.product_sort_container')
        this.burguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.lowToHigh = Selector('.product_sort_container option:nth-child(3)')
        this.addFleeceJacketButton = Selector('#add-to-cart-sauce-labs-fleece-jacket')
        this.addBackpackButton = Selector('#add-to-cart-sauce-labs-backpack')
        this.addShirtButton = Selector('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.addRedShirtButton = Selector('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        this.addLightButton = Selector('#add-to-cart-sauce-labs-bike-light')
        this.addOnesieButton = Selector('#add-to-cart-sauce-labs-onesie')
        this.cartButton = Selector('.shopping_cart_link')
        this.backpackName = Selector('.inventory_list div.inventory_item:nth-child(1) .inventory_item_name')
        this.lightName = Selector('.inventory_list div.inventory_item:nth-child(2) .inventory_item_name')
        this.shirtName = Selector('.inventory_list div.inventory_item:nth-child(3) .inventory_item_name')
        this.fleeceJacketName = Selector('.inventory_list div.inventory_item:nth-child(4) .inventory_item_name')
        this.onesieName = Selector('.inventory_list div.inventory_item:nth-child(5) .inventory_item_name')
        this.redShirtName = Selector('.inventory_list div.inventory_item:nth-child(6) .inventory_item_name')
        this.precio1 = Selector('.inventory_list div.inventory_item:nth-child(1) .inventory_item_price')
        this.precio2 = Selector('.inventory_list div.inventory_item:nth-child(2) .inventory_item_price')
        this.precio3 = Selector('.inventory_list div.inventory_item:nth-child(3) .inventory_item_price')
        this.precio4 = Selector('.inventory_list div.inventory_item:nth-child(4) .inventory_item_price')
        this.precio5 = Selector('.inventory_list div.inventory_item:nth-child(5) .inventory_item_price')
        this.precio6 = Selector('.inventory_list div.inventory_item:nth-child(6) .inventory_item_price')
        
    }
    async logoutUser(){
        await t
            .click(this.burguerButton)
            .click(this.logoutButton)
    }
    async sortProducts(){
        await t
            .click(this.sortButton)
            .click(this.lowToHigh)
    }
    async validateProducts(){
        var price = [this.precio1.innertext,this.precio2.innertext,this.precio3.innertext,this.precio4.innertext,this.precio5.innertext,this.precio6.innertext]
        var pricenum = [0,0,0,0,0,0]
        for (var j=0;j<6;j++){
             pricenum[j] = price[j].substring(1)
        }
        for(var i = 1;i>6;i++){
            if (parseFloat(pricenum[i-1])>parseFloat(pricenum[i])){
                return false;
            }
            
        }
        return true;
    }
    async addMultipleProducts(){
        await t
            .click(this.addBackpackButton)
            .click(this.addLightButton)
            .click(this.addShirtButton)
            .click(this.addFleeceJacketButton)
            .click(this.addOnesieButton)
            .click(this.addRedShirtButton)
            .click(this.cartButton)
    }
    async addOnesieProduct(){
        await t
            .click(this.addOnesieButton)
            .click(this.cartButton)
    }
}

export default new ProductsPage()