import CartService from "../domain.services/cart.services";
import ItemService from "../domain.services/item.services";

// the models should be global datatypes 
import Cart from "../domain.models/cart.model";
import Item from "../domain.models/item.model";
import User from "../domain.models/user.model";

export default class CartUseCases {
  private cartService: CartService;
  private itemService: ItemService;

  constructor(cartService: CartService, itemService: ItemService) {
    this.cartService = cartService;
    this.itemService = itemService;
  }

  createCart(id: string, user: User): any {
    const cart = this.cartService.createCart(id, user);

    return {
        cartId: cart.getId(),
        userId: cart.getUserId(),
        items: cart.getItems(),
        total: cart.getTotal()
    };

  };

    addToCart(cart: Cart, item: Item): any {
        const updatedCart = this.cartService.addToCart(cart, item);
    
        return {
            id: updatedCart.getId(),
            userId: updatedCart.getUserId(),
            items: updatedCart.getItems(),
            total: updatedCart.getTotal()
        };
    };

    removeFromCart(cart: Cart, item: Item): any {
        const updatedCart = this.cartService.removeFromCart(cart, item);
    
        return {
            id: updatedCart.getId(),
            userId: updatedCart.getUserId(),
            items: updatedCart.getItems(),
            total: updatedCart.getTotal()
        };
    };



//   createCart(id: string, user: User): Cart {
//     return this.cartService.createCart(id, user);
//   };

//   addToCart(cart: Cart, item: Item): Cart {
//     return this.cartService.addToCart(cart, item);
//   }

//   removeFromCart(cart: Cart, item: Item): Cart {
//     return this.cartService.removeFromCart(cart, item);
//   }
}

