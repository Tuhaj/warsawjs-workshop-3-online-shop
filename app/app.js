import ApplicationController from './application.controller'
// import * as foo from './application.controller'
// console.log('piotr', foo.piotr);

import {moduleName as componentsModuleName} from './components/components.module'

export const moduleName = 'show'

angular.module(moduleName, [componentsModuleName])
    .controller('ApplicationController', ApplicationController)

// angular.module(moduleName, [])
//     .controller('componentsModuleName', componentsModuleName)
//
