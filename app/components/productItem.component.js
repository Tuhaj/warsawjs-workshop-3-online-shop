class ProductItemController {

    constructor() {
        this.count = 0;
    }
    countPicked(count) {
        this.addToCart({amount: count})
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
    <form name="itemForm">
        <input type="number" ng-model="$ctrl.count" min="1", max="100">
        <button ng-disabled="itemForm.$invalid" ng-click="$ctrl.countPicked()">Dodaj do koszyka</button>
    </form>

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