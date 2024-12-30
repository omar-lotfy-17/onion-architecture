import Item from '../domain.models/item.model';

export default class ItemService {

    createItem(id: string, name: string, price: number, description: string): Item {
        return new Item(id, name, price, description);
    };

    updateItem(item: Item, name: string, price: number, description: string): Item {
        item.setName(name || item.getName());
        item.setPrice(price || item.getPrice());
        item.setDescription(description || item.getDescription());
        return item;
    };

    // delete items logic should be added

};