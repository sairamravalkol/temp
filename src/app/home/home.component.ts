import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel } from '@syncfusion/ej2-angular-schedule';
export interface Timeoff {
  associateId: string,
  associateName: string,
  startTime: Date,
  endTime: Date,
  reportedDate: string,
  timeType: string,
  fullDay: boolean,
  OwnerId: number,
  
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class HomeComponent implements OnInit {
  public allowMultipleOwner: Boolean = true;
  public group: GroupModel = {
    resources: ['Owners']
};

 
  timeoff: Timeoff[] = [{
    "associateId": "1",
    "associateName": "john",
    startTime: new Date(2019, 4, 6, 10, 0),
    endTime: new Date(2019, 4, 6, 11, 0),
    "reportedDate": "10-04-2019",
    "timeType": "child-care",
    fullDay: false,
    OwnerId: 1,
  },
  {
    "associateId": "2",
    "associateName": "smith",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false,
    OwnerId: 2,
  },
  {
    "associateId": "3",
    "associateName": "Keats",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false,
    OwnerId: 3,
  },
  {
    "associateId": "4",
    "associateName": "Daniel",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false,
    OwnerId: 2,
  }, {
    "associateId": "5",
    "associateName": "Wills",
    startTime: new Date(2019, 4, 6, 8, 0),
    endTime: new Date(2019, 4, 6, 10, 0),
    "reportedDate": "10-04-2019",
    "timeType": "Sick",
    fullDay: false,
    OwnerId: 2,
  }];
 
  public eventSettings: EventSettingsModel = {
    dataSource: this.timeoff, fields: {
      id: 'associateId',
      subject: { name: 'timeType' },
      isAllDay: { name: 'fullDay' },
      location: { name: 'Source' },
      description: { name: 'Comments' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
      // startTimezone: { name: 'Origin' },
      // endTimezone: { name: 'Destination' }
    }
  };
  displayedColumns: string[] = ['associateName', 'startTime', 'endTime', 'actions'];
  dataSource = this.timeoff;
  constructor(private data: DataService) {

  }

  ngOnInit() {

  }

}
