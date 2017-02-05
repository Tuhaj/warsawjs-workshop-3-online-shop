class ShopLogoController {
    constructor() {
        console.log('hello controller!')
        this.source = '../images/warsawjs-logo.png'
        this.width = 'auto'
        // this.sizes = new Map([['medium', 'small'], ['250px', '100px']]) // refactor onInit with it!
    }

    $onInit() {
        if (this.size === 'medium') {
            this.width = 250
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
