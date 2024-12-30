import Cart from '../domain.models/cart.model';
import Item from '../domain.models/item.model';
import User from '../domain.models/user.model';

export default class CartService {
    
    // should it include private fields (cart, user)
    // instead of passing cart and user as arguments?

    createCart(id: string, user: User): Cart {
      return new Cart(id, user.getId(), []);
    }

    addToCart(cart: Cart, item: Item): Cart {
      const items = cart.getItems();
      items.push(item);
      cart.setItems(items);
      return cart;
    };

    removeFromCart(cart: Cart, item: Item): Cart {
      const items = cart.getItems();
      const index = items.indexOf(item);
      items.splice(index, 1);
      cart.setItems(items);
      return cart;
    };

};