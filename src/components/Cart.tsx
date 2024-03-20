import Item from './Item.tsx';

class Cart {
    static items: Item[] = [];

    static addItem(name: string, toppings: string[] = [], size: string = "", quantity: number) : void {
        this.items.push(new Item(name, toppings, size, quantity));
    }
}

export default Cart;