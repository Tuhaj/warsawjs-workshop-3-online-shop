export const name = "productsList"

const template =     ` 
 <div>
    {{ $ctrl.products | json }}
    <h2>Products</h2>
    <product-item></product-item>
 </div>
`
export const properties = {
    template,
    bindings: {
        products: '<items'
    }
}
