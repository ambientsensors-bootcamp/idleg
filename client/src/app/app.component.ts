import { Component } from '@angular/core';
//import { BillDataService } from './services/bill-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Idleg';

  constructor() {

  }

  someProperty:string = '';

  ngOnInit() {
  
  }
}
