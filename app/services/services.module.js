/**
 * Created by piotrzientara on 05/02/2017.
 */
import {ProductsService, name as productsServiceName} from './product.service'

class MyDummyService {
    log() {
        console.log('działam!')
    }
}

export const moduleName = 'services'
angular.module(moduleName, [])
    // .service('myDummyService', MyDummyService)
    .service(productsServiceName, ProductsService)