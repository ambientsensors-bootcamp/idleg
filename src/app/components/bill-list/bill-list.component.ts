import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';
import { PageEvent } from '@angular/material';

// Add Material Design and Angular Flex Layout
import { MaterialModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';


//import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  
/*onmypage($event){
    this.pageEvent=$event
 console.log(this.testpage)
  this.testpage=this.pageEvent.pageIndex;;
  }*/

  bills:Bill[];
  
  //baseUrl="bills/?state=id&search_window=session&page=1&per_page=20";
 
  isFilter:boolean=false;
  

pageEvent: PageEvent;  
  
  page:number=1;
  itemsPPage:number=20;
  
/*  testpage=5;
  onmypage($event){
    this.pageEvent=$event
 console.log(this.testpage)
  this.testpage=this.pageEvent.pageIndex;;
  }
 */
  /* submitted = false;
  onSu bmit() { this.submitted = true; }*/

  constructor(private ws:WebService) {
    this.bills = [];
  }

  ngOnInit() {
   // "bills/?state=id&search_window=session&updated_since=2017-03-01&page=1&per_page=20"
    
    this.ws.getResource("bills/?state=id&search_window=session&updated_since=2017-03-01",1).subscribe(data => {
      this.bills = data;
      console.log("data", this.bills); 

});



  }    
   toggleFilter(){
    this.isFilter=! this.isFilter ;
   }

     



   filterBillsList(filterStr){
  console.log('filterStr: ',filterStr)
  this.bills=[]
  let url="bills/"+filterStr;
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