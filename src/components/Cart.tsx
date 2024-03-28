import Item from './Item.tsx';
import React, { useEffect, useState } from "react";

class Cart {
    static items: Item[] = [];

    static addItem(name: string, toppings: string[] = [], size: string = "", quantity: number, price: number) : void {
        this.items.push(new Item(name, toppings, size, quantity, price));
    }

}

export default Cart;