class ProductItemController {
    countPicked(count) {
        this.addToCart({amount: 10})
    }
}


export const name = "productItem"
// export const test = 'my precious'
const template =     ` 
 <div>
    <h2>{{ $ctrl.product.name }}</h2> 
    <p>for only {{ $ctrl.product.price }}</p>
    <p>{{ $ctrl.product.description}}</p>
    <p>Add to cart</p>
    <button ng-click="$ctrl.countPicked()">Dodaj do koszyka</button>

 </div>
`
export const properties = {
    template,
    bindings: {
        product: '<item',
        addToCart: '&onAddToCart'
    },
    controller: ProductItemController
}