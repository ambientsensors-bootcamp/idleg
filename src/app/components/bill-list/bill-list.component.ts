import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';
//import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  
  bills:Bill[];
  //baseUrl="bills/?state=id&search_window=session&page=1&per_page=20";
 
  isFilter:boolean=false;
  
  /* submitted = false;
  onSu bmit() { this.submitted = true; }*/

  constructor(private ws:WebService) {
    this.bills = [];
  }

  ngOnInit() {
    
    this.ws.getResource("bills/?state=id&search_window=session&page=1&per_page=20",1).subscribe(data => {
      this.bills = data;
      console.log("data", this.bills); 

});



  }    
   toggleFilter(){
    this.isFilter=! this.isFilter ;
   }

   filterBillsList(filterStr){
  console.log(filterStr)
  this.bills=[]
  let url="bills/?search_window=session&page=1&per_page=20"+filterStr;
  this.ws.getResource(url,1).subscribe(data => {
      this.bills = data;
      console.log("data2", this.bills); 
      });
}
  
  }


  
interface Bill{
  bill_id:string,
  title:string,
  id:string,
  session: string,
  created_at:string,
  updated_at:string
}