import {Selector, t} from 'testcafe'
import ConfirmationPage from '../Pages/ConfirmationPage'

class OverviewPage{
    constructor(){
        this.finishButton = Selector('#finish')
    }

    async finishPurchase(){
        await t
            .click(this.finishButton)
            .expect(ConfirmationPage.confirmationHeader.exists).ok()
    }
}

export default new OverviewPage()