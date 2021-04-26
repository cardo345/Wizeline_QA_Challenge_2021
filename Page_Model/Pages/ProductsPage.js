import {Selector, t} from 'testcafe'


class ProductsPage{
    constructor(){
        this.pageHeader = Selector('.title')
        this.sortButton = Selector('.product_sort_container')
        this.burguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.lowToHigh = Selector('.product_sort_container option:nth-child(3)')
        this.addOnesieButton = Selector('#add-to-cart-sauce-labs-onesie')
        this.itemName = Selector('.inventory_item_name')
        this.addToCart = Selector('.btn_inventory')
        this.cartButton = Selector('.shopping_cart_link')        
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
    async validateProducts(precio1, precio2){
        if (precio1 <= precio2) {
            return true
        }
        else return false
    }
    async addMultipleProducts(i){
            const addToCart = Selector('.btn_inventory').nth(i) 
            await t.click(addToCart)    
    }
    async clickCartbutton(){
        await t.click(this.cartButton)
    }
    async validateProductsAdded(i){
        let itemName = Selector('.cart_item:nth-child('+ i +') .inventory_item_name')
        switch(await itemName.innerText){
            case 'Sauce Labs Backpack':
                return true
            case 'Sauce Labs Bike Light':
                return true
            case 'Sauce Labs Bolt T-Shirt':
                return true
            case 'Sauce Labs Fleece Jacket':
                return true
            case 'Sauce Labs Onesie':
                return true
            case 'Test.allTheThings() T-Shirt (Red)':
                return true
            default:
                return false
        }
    }
    async addOnesieProduct(){
        await t
            .click(this.addOnesieButton)
            .click(this.cartButton)
    }
    async validateOnesie(){
        await t.hover(this.onesieName)      
    }
    async getProductsPrices(i){
        const prodPrice = Selector('.inventory_item:nth-child('+ i + ') .inventory_item_price')
        //console.log(await prodPrice.innerText)
        return await prodPrice.innerText
    }
}

export default new ProductsPage()