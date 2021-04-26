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
        this.backpackName = Selector('#item_4_title_link > div')
        this.lightName = Selector('#item_0_title_link > div')
        this.shirtName = Selector('#item_1_title_link > div')
        this.fleeceJacketName = Selector('#item_5_title_link > div')
        this.onesieName = Selector('#item_2_title_link > div')
        this.redShirtName = Selector('#item_3_title_link > div')

        
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
        if (precio1 < precio2) {
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
    async validateProductsAdded(){
        if(await t.hover(this.backpackName)){
            console.log('1')
            if(await t.hover(this.lightName)){
                console.log('2')
                if(await t.hover(this.shirtName)){
                    console.log('3')
                    if(await t.hover(this.fleeceJacketName)){
                        console.log('4')
                        if(await t.hover(this.onesieName)){
                            console.log('5')
                            if(await t.hover(this.redShirtName)){
                                console.log('6')
                                return true
                            }
                        }
                    }
                }
            }
        }
        else return false
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
        const prodPrice = Selector('inventory_item_price').nth(i) 
        return prodPrice.innerText
    }
}

export default new ProductsPage()