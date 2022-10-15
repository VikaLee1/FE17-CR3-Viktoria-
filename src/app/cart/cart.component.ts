import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IDish } from 'src/dishes/IDish';

import { FormGroup, FormControl , Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
  })

  constructor(private cs: CartService) { }
  totalprice=0;
  ngOnInit(): void {
  this.items = this.cs.getItems();
// console.log(this.items);
  this.totalprice=this.cs.getTotal();

  }

  clearItem(i:number){
    this.cs.clearItem(i);
    this.totalprice=this.cs.getTotal();
  }

  onSubmit(){
    if(this.info.valid){
      console.log(this.info.value);
    }
  }
}
