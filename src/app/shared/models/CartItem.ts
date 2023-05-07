import { Product } from "./Food";

export class CartItem{
    constructor(food:Product){
      this.food = food;  
    }
    food:Product;
    quantity:number = 1;

    get price():number{
        return this.food.price * this.quantity;
    }
}