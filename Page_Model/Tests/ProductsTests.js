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
        await t.expect(ProductsPage.pageHeader.exists).ok()
        let price = new Array(6)
        for(let i = 1; i <= 6; i++){
            price[i - 1] = await ProductsPage.getProductsPrices(i)
            price[i - 1] = Math.abs(price[i - 1].slice(1,6))
    }
        for(let j = 0; j < 5; j++){
            let precio1 = price[j]
            let precio2 = price[j + 1]
            await t.expect(await ProductsPage.validateProducts(precio1,precio2)).ok()
}
})