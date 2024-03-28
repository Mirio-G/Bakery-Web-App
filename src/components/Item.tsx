class Item {
    name: string;
    toppings: string[];
    size: string;
    quantity: number;
    price: number;

    constructor(name: string, toppings: string[], size: string, quantity: number, price: number) {
        this.name = name;
        this.toppings = toppings;
        this.size = size;
        this.quantity = quantity;
        this.price = price*quantity;
    }
}

export default Item;