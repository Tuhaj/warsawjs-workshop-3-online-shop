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
    }

    requestAddToCart() {
        console.log('test request add to cart')
    }
}