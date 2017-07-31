import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter1:filter;

  constructor(
    
  ) { 
   this.filter1={
topic:'50 state',
chamber:'boston',
state:'ma'
}
  
  }
  
  onSubmit(){}

  ngOnInit() {
  }

}
