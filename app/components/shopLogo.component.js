class ShopLogoController {
    constructor() {
        console.log('hello controller!')
        this.source = '../images/warsawjs-logo.png'
        this.width = 'auto'
        this.sizes = new Map([['medium', '100px'], ['small', '30px']])
    }

    $onInit() {
        console.log(this.size)
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
