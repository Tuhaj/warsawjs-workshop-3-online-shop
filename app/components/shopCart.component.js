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
        {{ $ctrl.items | json}}
     </div>
    `,
    bindings: {
        items: '<items'
    },
    controller: ShopCartController
}
