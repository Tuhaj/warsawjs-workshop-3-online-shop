class ShopLogoController {
    constructor() {
        console.log('hello controller!')
    }
}

export const name = "shopLogo"

export const properties = {
    template: `
        <img src="https://raw.githubusercontent.com/mateuszkocz/warsawjs-workshop-3-online-shop/development/app/images/warsawjs-logo.png" />
    `,
    controller: ShopLogoController,
    bindings: {
        size: '@'
    }
}
