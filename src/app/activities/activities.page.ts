import { Component, OnInit } from '@angular/core';
import { StravaService } from '../services/strava.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  activities = []

  constructor(private data: StravaService) { }

  ngOnInit() {
    //this.data.strava.activities.get({});
  }

}
