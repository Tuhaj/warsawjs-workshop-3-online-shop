export const name = "productsList"

const template =     ` 
 <div>
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
