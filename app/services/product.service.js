/**
 * Created by piotrzientara on 05/02/2017.
 */
export class ProductsService {
    constructor($http) {
        this.http = $http;
        this.productsStore = {
            normal: []
        }
    }

    get products() {
        return this.productsStore.normal;
    }

    get promotedProducts() {
        return [
            {name: 'Apple', price: 5},
            {name: 'Pineapple', price: 10}
        ]
    }

    loadProducts() {
        this.http.get('http://127.0.0.1:8001/products')
            .then(response => response.data)
            .then(products => {
                this.productsStore.normal = products
            })
    }
}

export const name = 'productsService'
