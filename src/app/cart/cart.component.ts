import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IDish } from 'src/dishes/IDish';

import { FormGroup, FormControl , Validators} from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<IDish> =[];

  title = "Forms";
  info=new FormGroup({
    fullName: new FormGroup('',Validators.required),
    adress: new FormGroup('',Validators.required),
  });

  constructor(private cs: CartService) { }
  totalprice=0;
  totalItem=0;
  totalService=0;
  Price=0;
  totalDiscount=0;
  
  ngOnInit(): void {
  this.items = this.cs.getItems();
  this.totalprice=this.cs.getTotal();
  this.totalItem=this.cs.getTotalItems();
  this.totalService=this.cs.getServices();
  this.Price=this.cs.getFinal();
  this.totalDiscount=this.cs.getDiscount();
  

  }

  clearItem(i:number){
    this.cs.clearItem(i);
    this.totalprice=this.cs.getTotal();
    this.totalItem=this.cs.getTotalItems();
    this.totalService=this.cs.getServices();
    this.Price=this.cs.getFinal();
    this.totalDiscount=this.cs.getDiscount();
   
  }

  onSubmit(){
    if(this.info.valid){
      console.log(this.info.value);
    }
  }
}
