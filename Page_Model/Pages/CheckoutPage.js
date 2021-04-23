import {Selector, t } from 'testcafe'

class CheckoutPage{
    constructor(){
        this.checkoutHeader = Selector('.title')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipField = Selector('#postal-code')
        this.continueButton = Selector('#continue')
    }
    async enterMailInfo(firstname,lastname,postalcode){
        await t
            .typeText(this.firstNameField, firstname,{paste:true})
            .typeText(this.lastNameField, lastname,{paste:true})
            .typeText(this.zipField,postalcode,{paste:true})
            .click(this.continueButton)
    }
}

export default new CheckoutPage()