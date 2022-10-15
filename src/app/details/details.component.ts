import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../services/cart.service';

import { dishes } from 'src/dishes/dish';
import { IDish } from 'src/dishes/IDish';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
dish: IDish={} as IDish;
id:number=0;

  constructor( private route : ActivatedRoute, private cs: CartService) { }
 
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
    // this.id= +params["dishID"];
    this.id= +params["id"];
    this.dish=dishes[this.id];
    }) 
}

 addToCart(){
  alert("Your dish has been added to the cart");
  this.cs.addToCart(this.dish);
 }

}
