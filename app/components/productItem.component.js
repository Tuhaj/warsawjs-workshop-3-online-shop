export const name = "productItem"
// export const test = 'my precious'
const template =     ` 
 <div>
    {{ test }} {{ $ctrl.product.name }} for only {{ $ctrl.product.price }}
 </div>
`
export const properties = {
    template,
    bindings: {
        product: '<item'
    }
}