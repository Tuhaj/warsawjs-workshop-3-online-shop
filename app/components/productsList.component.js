export const name = "productsList"

const template = ` 
  <product-item ng-repeat="product in $ctrl.products"></product-item>
`
export const properties = {
    template,
    bindings: {
        products: '<items'
    }
}
