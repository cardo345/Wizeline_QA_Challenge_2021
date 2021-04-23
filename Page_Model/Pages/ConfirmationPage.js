import {Selector, t} from 'testcafe'

class ConfirmationPage{
    constructor(){
        this.confirmationTitle = Selector('.title')
        this.confirmationHeader = Selector('.complete-header')
        this.confirmationText = Selector('.complete-text')
    }
}
export default new ConfirmationPage()