export const name = "productsList"

const template = ` 
  <product-item ng-repeat="product in $ctrl.products" item="product"></product-item>
  <p ng-if="!ctrl.products.length">No items yet!</p>
`
export const properties = {
    template,
    bindings: {
        products: '<items'
    }
}
