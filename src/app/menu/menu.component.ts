import { Component, OnInit } from '@angular/core';
import { dishes } from 'src/dishes/dish';
import { IDish } from 'src/dishes/IDish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
// dishes : Array<IDish> =dishes;
dishes:IDish[]=dishes;
  constructor() {
    // console.log(this.dishes)
   }

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { dishes } from 'src/dishes/dish';
// import { IDish } from 'src/dishes/IDish';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
// dishes : Array<IDish> =dishes;
//   constructor() {
//     // console.log(this.dishes)
//    }

//   ngOnInit(): void {
//   }

// }
