/**
 * Created by piotrzientara on 05/02/2017.
 */
export class ProductsService {
    constructor($http) {
    }

    get products() {
        return [
            {name: 'Orange', price: 10},
            {name: 'Banana', price: 20}
        ]
    }

    get promotedProducts() {
        return [
            {name: 'Apple', price: 5},
            {name: 'Pineapple', price: 10}
        ]
    }

    loadProducts() {

    }
}

export const name = 'productsService'
