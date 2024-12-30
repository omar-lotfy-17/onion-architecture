import CartUseCases from '../../../core/application.services/cart.usecases';

export default class CartRepo {
    private cartUseCases: CartUseCases;

    constructor(cartUseCases: CartUseCases) {
        this.cartUseCases = cartUseCases;
    }

    createCart(id: string, user: any): object {
        const cart = this.cartUseCases.createCart(id, user);

        // not sure if the destruct work here

        let cartId, userId, items, total;
        ({cartId, userId, items, total} = cart);

        console.log(cart, userId, items, total);
        
        // add cart to database

        return {cartId, userId, items, total};
        
    }

    addToCart(cart: any, item: any): any {
        return this.cartUseCases.addToCart(cart, item);
    }

    removeFromCart(cart: any, item: any): any {
        return this.cartUseCases.removeFromCart(cart, item);
    }

}