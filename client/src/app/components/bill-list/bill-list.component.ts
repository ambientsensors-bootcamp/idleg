import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  
  bills:Bill[];

  constructor() {
    this.bills = [];
  }

  ngOnInit() {
    for  (let i=0;i<=3;i++){
      this.bills.push({Id:'hh',body:'my bill number',userComment:'kk',userLike:i});
    }
    
  }

}

interface Bill{
  Id:string,
  body:string,
  userComment:string,
  userLike:number
}