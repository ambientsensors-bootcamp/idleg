import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {
  public filter1: filter;
  chambers: string[] = ['lower', 'upper']




  @Output()
  notify = new EventEmitter<string>();

  constructor(

  ) {
    this.filter1 = {
      subject: '50 state',
      chamber: 'boston',
      state: 'ma',
      type: 'gh',
      year: '2017'
    }
  }

  sendFilter() {
    //console.log(this.filter1.subject)
    //this.notify.emit(parseInt(this.num1) + parseInt());

    //let fstr:string="&state="+this.filter1.state+"&chamer="+this.filter1.chamber+"&subject="+this.filter1.subject;
    let fstr: string = "?state=" + this.filter1.state + "&search_window=session:" + this.filter1.year + "&page=1&per_page=20"

    this.notify.emit(fstr);
  }

  ngOnInit() {
  }

  onSelectionChangechamber(chamber: string) {
    console.log(chamber);
  }
}
