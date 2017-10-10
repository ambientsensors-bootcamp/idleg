import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';
import {ActivatedRoute,Params} from '@angular/router';
//import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

Id:string; 
constructor(private ws:WebService, private router:ActivatedRoute) {
   
  }

   

  ngOnInit() {
    this.Id=this.router.snapshot.params['billId']
    /* this.ws.getResource("bills/?state=id&search_window=session&updated_since=2017-03-01",1).subscribe(data => {
      this.bills = data;
      console.log("data", this.bills); 

}); */
  }

}
