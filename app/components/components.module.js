import * as pageHeaderComponent from './pageHeader.component'
import * as pageFooterComponent from './pageFooter.component'
import * as shopLogo from './shopLogo.component'

export const moduleName = 'components'
angular.module(moduleName, [])
        .component(pageHeaderComponent.name, pageHeaderComponent.properties)
        .component(pageFooterComponent.name, pageFooterComponent.properties)
        .component(shopLogo.name, shopLogo.properties)
