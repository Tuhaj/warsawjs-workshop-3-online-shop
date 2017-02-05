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
        this.inCartProducts = []
        this.amount = 0
    }

    addProductToCart(product, amount) {
        let element = this.inCartProducts.find(function (cartProduct) {
            return cartProduct.name === product.name
        })
        if(element) {
            console.log('already in cart!')
        } else {
            this.amount += amount;
            this.inCartProducts.push(product)
        }
    }
}