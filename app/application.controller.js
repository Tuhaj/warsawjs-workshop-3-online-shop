export default class ApplicationController {
    constructor() {
        this.products = [
            {name: 'Orange', price: 10},
            {name: 'Banana', price: 20}
        ]
        this.promotedProducts = [
            {name: 'Apple', price: 5},
            {name: 'Pineapple', price: 10}
        ]
        this.inCartProducts = [{name: 'Apple', price: 5}]
    }

    addProductToCart(product, amount) {
        console.log(product)
        console.log(amount)
    }
}