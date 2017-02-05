import ApplicationController from './application.controller'
// import * as foo from './application.controller'
// console.log('piotr', foo.piotr);

import {moduleName as componentsModuleName} from './components/components.module'
import {moduleName as servicesModuleName} from './services/services.module'
export const moduleName = 'show'

angular.module(moduleName, [componentsModuleName, servicesModuleName])
    .controller('ApplicationController', ApplicationController)

// angular.module(moduleName, [])
//     .controller('componentsModuleName', componentsModuleName)
//
