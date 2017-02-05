class ShopCartController {
    constructor() {
    }

    $onInit() {
        console.log('in cart!', this.items)
    }
}

export const name = 'shopCart'
export const properties = {
    template: `
     <div>Shop cart
        <div ng-repeat="item in $ctrl.items">
               <span>{{ item.name }}</span> 
               <span>- {{ item.price }}</span>
        </div>
        <p>Total amount {{$ctrl.amount}}</p>
     </div>
    `,
    bindings: {
        items: '<items',
        amount: '<amount'
    },
    controller: ShopCartController
}
