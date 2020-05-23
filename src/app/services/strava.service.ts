import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://www.strava.com/api/v3';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  clubId = '621774';

  //clubs/621774/group_events

  constructor(private http: HttpClient) {
    
  }
}
