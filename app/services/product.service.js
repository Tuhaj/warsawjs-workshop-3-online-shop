/**
 * Created by piotrzientara on 05/02/2017.
 */
export class ProductsService {
    constructor($http) {
        this.http = $http;
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
        this.http.get('http://127.0.0.1:8001/products')
            .then(response => response.data)
            .then(data => console.log(data))
    }
}

export const name = 'productsService'
