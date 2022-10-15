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

  getTotal(){
    let total:number=0;
    for(let item of this.items){
      total +=item.price;
    }
    return total;
  }

  // getServices(){
  //   let service:number=0;
  //   for(let item of this.items){
  //     service +=this.getTotal*0.9;
  //   }
  // }

  // getFinalprice(){
  //   let final:number=0;
  //   for(let item of this.items){
  //     final=this.getTotal;
  //   } 
  //   return final;
    
  // }

}
