import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  
  bills:Bill[];

  /* submitted = false;
  onSu bmit() { this.submitted = true; }*/

  constructor(private ws:WebService) {
    this.bills = [];
  }

  ngOnInit() {
    this.ws.getResource("bills").subscribe(data => {
      this.bills = data;
      console.log("data", this.bills); 
});
    /* for  (let i=0;i<=3;i++){
    this.bills.push({Id:i.toString(),
    body:'The status of each bill, resolution, proclamation, and memorials listed on this page are updated when the offices of the Secretary of the Senate and the Chief Clerk of the House publish the un-official daily journals and should not be deemed official. The official bill actions are located in the final journal, which are maintained by the offices of the Secretary of the Senate and the Chief Clerk of the House.'+i.toString(),
    userComment:'kk'+i.toString(),userLike:i});  */

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