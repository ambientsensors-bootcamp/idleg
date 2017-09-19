import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {
  public filter1: filter;
  chambers: string[] = ["lower", "upper"]
  states = [
    {
      viewValue: "Alabama",
      value: "AL"
    },
    {
      "viewValue": "Alaska",
      value: "AK"
    },
    {
      viewValue: "American Samoa",
      value: "AS"
    },
    {
      viewValue: "Arizona",
      value: "AZ"
    },
    {
      viewValue: "Arkansas",
      value: "AR"
    },
    {
      viewValue: "California",
      value: "CA"
    },
    {
      viewValue: "Colorado",
      value: "CO"
    },
    {
      viewValue: "Connecticut",
      value: "CT"
    },
    {
      viewValue: "Delaware",
      value: "DE"
    },
    {
      viewValue: "District Of Columbia",
      value: "DC"
    },
    {
      viewValue: "Federated States Of Micronesia",
      value: "FM"
    },
    {
      viewValue: "Florida",
      value: "FL"
    },
    {
      viewValue: "Georgia",
      value: "GA"
    },
    {
      viewValue: "Guam",
      value: "GU"
    },
    {
      viewValue: "Hawaii",
      value: "HI"
    },
    {
      viewValue: "Idaho",
      value: "ID"
    },
    {
      viewValue: "Illinois",
      value: "IL"
    },
    {
      viewValue: "Indiana",
      value: "IN"
    },
    {
      viewValue: "Iowa",
      value: "IA"
    },
    {
      viewValue: "Kansas",
      value: "KS"
    },
    {
      viewValue: "Kentucky",
      value: "KY"
    },
    {
      viewValue: "Louisiana",
      value: "LA"
    },
    {
      viewValue: "Maine",
      value: "ME"
    },
    {
      viewValue: "Marshall Islands",
      value: "MH"
    },
    {
      viewValue: "Maryland",
      value: "MD"
    },
    {
      viewValue: "Massachusetts",
      value: "MA"
    },
    {
      viewValue: "Michigan",
      value: "MI"
    },
    {
      viewValue: "Minnesota",
      value: "MN"
    },
    {
      viewValue: "Mississippi",
      value: "MS"
    },
    {
      viewValue: "Missouri",
      value: "MO"
    },
    {
      viewValue: "Montana",
      value: "MT"
    },
    {
      viewValue: "Nebraska",
      value: "NE"
    },
    {
      viewValue: "Nevada",
      value: "NV"
    },
    {
      viewValue: "New Hampshire",
      value: "NH"
    },
    {
      viewValue: "New Jersey",
      value: "NJ"
    },
    {
      viewValue: "New Mexico",
      value: "NM"
    },
    {
      viewValue: "New York",
      value: "NY"
    },
    {
      viewValue: "North Carolina",
      value: "NC"
    },
    {
      viewValue: "North Dakota",
      value: "ND"
    },
    {
      viewValue: "Northern Mariana Islands",
      value: "MP"
    },
    {
      viewValue: "Ohio",
      value: "OH"
    },
    {
      viewValue: "Oklahoma",
      value: "OK"
    },
    {
      viewValue: "Oregon",
      value: "OR"
    },
    {
      viewValue: "Palau",
      value: "PW"
    },
    {
      viewValue: "Pennsylvania",
      value: "PA"
    },
    {
      viewValue: "Puerto Rico",
      value: "PR"
    },
    {
      viewValue: "Rhode Island",
      value: "RI"
    },
    {
      viewValue: "South Carolina",
      value: "SC"
    },
    {
      viewValue: "South Dakota",
      value: "SD"
    },
    {
      viewValue: "Tennessee",
      value: "TN"
    },
    {
      viewValue: "Texas",
      value: "TX"
    },
    {
      viewValue: "Utah",
      value: "UT"
    },
    {
      viewValue: "Vermont",
      value: "VT"
    },
    {
      viewValue: "Virgin Islands",
      value: "VI"
    },
    {
      viewValue: "Virginia",
      value: "VA"
    },
    {
      viewValue: "Washington",
      value: "WA"
    },
    {
      viewValue: "West Virginia",
      value: "WV"
    },
    {
      viewValue: "Wisconsin",
      value: "WI"
    },
    {
      viewValue: "Wyoming",
      value: "WY"
    }
  ]


  @Output()
  notify = new EventEmitter<string>();

  constructor(

  ) {
      this.filter1 = {
      subject: '',
      chamber: '',
      state: 'ID',
      type: '',
      year: ''
    }  
   // this.filter1={}''
  }

  sendFilter() {
    //console.log(this.filter1.subject)
    //this.notify.emit(parseInt(this.num1) + parseInt());

    //let fstr:string="&state="+this.filter1.state+"&chamer="+this.filter1.chamber+"&subject="+this.filter1.subject;
    let fstr: string = "?state=" + this.filter1.state + "&chamber=" + this.filter1.chamber + "&search_window=session" 
    console.log("chamber=" + this.filter1.chamber)
    this.notify.emit(fstr);
  }

  ngOnInit() {
  }

  onSelectionChangechamber(chamber: string) {
    console.log(chamber);
  }
}
