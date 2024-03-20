class Item {
    name: string;
    toppings: string[];
    size: string;
    quantity: number;

    constructor(name: string, toppings: string[], size: string, quantity: number) {
        this.name = name;
        this.toppings = toppings;
        this.size = size;
        this.quantity = quantity;
    }
}

export default Item;