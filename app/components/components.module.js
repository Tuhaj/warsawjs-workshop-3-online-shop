import * as pageHeaderComponent from './pageHeader.component'
import * as pageFooterComponent from './pageFooter.component'
import * as shopLogo from './shopLogo.component'
import * as productsList from './productsList.component'
import * as productItem from './productItem.component'

export const moduleName = 'components'
angular.module(moduleName, [])
        .component(pageHeaderComponent.name, pageHeaderComponent.properties)
        .component(pageFooterComponent.name, pageFooterComponent.properties)
        .component(shopLogo.name, shopLogo.properties)
        .component(productsList.name, productsList.properties)
        .component(productItem.name, productItem.properties)
