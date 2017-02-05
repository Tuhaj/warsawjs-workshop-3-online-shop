class ProductsListController {
    constructor() {
        console.log('test')
    }

    addToCart(product, amount) {
        console.log('dziala!')
    }
}

export const name = "productsList"

const template = ` 
  <product-item ng-repeat="product in $ctrl.products" item="product" on-add-to-cart="$ctrl.addToCart(product, amount)"></product-item>
  <p ng-if="!ctrl.products.length">No items yet!</p>
`
export const properties = {
    template,
    bindings: {
        products: '<items',
        requestAddToCart: "&onAddToCart"
    },
    controller: ProductsListController
}
