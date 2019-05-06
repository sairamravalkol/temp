import { Component, OnInit } from '@angular/core';
import { StringDecoder } from 'string_decoder';
import { DataService } from '../data.service';
import { Timeoff } from '../home/home.component';
export interface Employee {
  value: string;
  viewValue: string;
  associate:any;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  selectedValue:string;
  selectedOption:string;
  gabBal="10 Hrs"

  timeoff: Timeoff[] = [{
    "associateId": "1",
    "associateName": "john",
    startTime: new Date(2019, 4, 6, 10, 0),
    endTime: new Date(2019, 4, 6, 11, 0),
    "reportedDate": "10-04-2019",
    "timeType": "child-care",
    fullDay: false
  },
  {
    "associateId": "2",
    "associateName": "smith",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false
  },
  {
    "associateId": "3",
    "associateName": "Keats",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false
  },
  {
    "associateId": "4",
    "associateName": "Daniel",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false
  }, {
    "associateId": "5",
    "associateName": "Wills",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false
  }];
  
  displayedColumns: string[] = ['associateName', 'startTime', 'endTime'];
  
  
  dataSource = this.timeoff;
  
  constructor() {
   
  }

  ngOnInit() {
   
    
  }

}
