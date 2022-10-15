import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor( private route : ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
    this.id= +params["dishID"];
    this.dish=dishes[this.id];
    });
    
}
}
