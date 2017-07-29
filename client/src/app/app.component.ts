import { Component } from '@angular/core';
import { BillDataService } from './services/bill-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Idleg';

  constructor(private dataService:BillDataService) {

  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.billList);

    this.someProperty = this.dataService.billData(); 
  }
}
