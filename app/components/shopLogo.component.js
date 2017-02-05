class ShopLogoController {
    constructor() {
        console.log('hello controller!')
        this.source = '../images/warsawjs-logo.png'
        this.width = 'auto'
    }

    $onInit() {
        if (this.size === 'medium') {
            this.width = '250px'
        } else if(this.size === 'small') {
            this.width = '100px'
        }
    }
}

export const name = "shopLogo"

export const properties = {
    template: `
        <img ng-src="{{ $ctrl.source }}" width="{{ $ctrl.width }}" />
    `,
    controller: ShopLogoController,
    bindings: {
        size: '@'
    }
}
