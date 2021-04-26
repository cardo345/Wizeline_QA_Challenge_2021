import {CREDENTIALS} from '../Data/Const'
import LoginPage from '../Pages/LoginPage'
import ProductsPage from '../Pages/ProductsPage'

fixture('Products Page Scenarios')
.page `https://www.saucedemo.com/`

test('Sort products from', async t=>{
    await t
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USER, CREDENTIALS.STANDARD_USER.PSWD)
        await t.expect(ProductsPage.pageHeader.exists).ok()
    await t
        ProductsPage.sortProducts()
        let price = new Array(6)
        for(let i = 0; i < 5; i++){
            price[i] = ProductsPage.getProductsPrices(i)
    }
        for(let j = 0; j < 5; j++){
            let precio1 = price[j]
            let precio2 = price[j + 1]
            await t.expect(ProductsPage.validateProducts(precio1,precio2)).ok()
}
})