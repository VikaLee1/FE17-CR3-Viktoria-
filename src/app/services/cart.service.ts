import { Injectable } from '@angular/core';
import { IDish } from 'src/dishes/IDish';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: Array<IDish> = [];
  constructor() { }

  addToCart(dish:IDish){
    this.items.push(dish);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items =[];
    return this.items;
  }

  clearItem(i:number){
    this.items.splice(i,1);
  }

  // price for all dishes
  getTotal(){
    let total:number=0;
    for(let item of this.items){
      total +=item.price;
    }
    return total;
  }

  // total amount of items in the cart
  getTotalItems(){
    let totalItem:number=0;
    for(let items of this.items){
      totalItem +=items.qtty;
    }
    return totalItem;
  }

// 10% of the price for all dishes (getTotal) for service delivery
getServices(){
  let service:number=0;
  for (let item of this.items){
    service +=item.price*0.1
  }
  return service;
}

// final price with the discount
getDiscount() {
  let discount:number=0;
  let final:number=0;

  for(let item of this.items){
    // final +=(item.price*0.1+item.price);
     final +=item.price;
    if(final>=40){
       discount += item.price*0.15;
    } }
    return discount;
  }

  // final price for everything in the cart
// getFinal(){
//   let finalPrice:number=0;
//   for(let item of this.items){
//     finalPrice +=(((item.price*0.1)+item.price)-(((item.price*0.1)+item.price)*0.15));
//     // finalPrice += Number(this.getTotal)+Number(this.getServices)-Number(this.getDiscount); 
//   }
//   return finalPrice;
// }

getFinal(){
    let finalPrice:number=0;
    for(let item of this.items){
      finalPrice +=(((item.price*0.1)+item.price)-(((item.price*0.1)+item.price)*0.15));
      // finalPrice += (Number(this.getTotal)+Number(this.getServices)-Number(this.getDiscount)); 
    }
    return finalPrice;
  }
    
}





