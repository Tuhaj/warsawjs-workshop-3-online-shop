export default class ApplicationController {
    constructor(productsService) {
        this.productsService = productsService
        this.products = productsService.products
        this.promotedProducts = productsService.promotedProducts
        this.inCartProducts = []
        this.totalPrice = 0
    }

    addProductToCart(product, amount) {
        let element = this.inCartProducts.find(function (cartProduct) {
            return cartProduct.name === product.name
        })
        if(element) {
            console.log('already in cart!')
        } else {
            console.log(amount)
            this.totalPrice += ( amount * product.price)
            console.log('particular', product.price)
            console.log('total', this.totalPrice)
            this.inCartProducts.push(product)
        }
        // const addedProduct =  angular.extend(angular.copy(product), {amount})
        // this.inCartProducts.push(addedProduct)
    }
}