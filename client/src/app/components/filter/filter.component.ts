import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {
  public filter1:filter;



@Output() 
notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    
  ) { 
   this.filter1={
topic:'50 state',
chamber:'boston',
state:'ma'
}
  
  }
  
  sendFilter(){
    console.log(this.filter1.topic)
     //this.notify.emit(parseInt(this.num1) + parseInt());
     this.notify.emit(this.filter1.topic);
  }

  ngOnInit() {
  }

}
