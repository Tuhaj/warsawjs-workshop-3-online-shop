import * as pageHeaderComponent from './pageHeader.component'

export const moduleName = 'components'
angular.module(moduleName, [])
       .component(pageHeaderComponent.name, pageHeaderComponent.properties)
