import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {ActivityDetailResponse} from '../../models/activity-detail-response.model';
import {ActivityCardComponent} from './activity-card/activity-card.component';

@Component({
  selector: 'app-activities',
  imports: [
    ActivityCardComponent
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent implements OnInit {

  public activities: ActivityDetailResponse[] = [];

  constructor(private readonly httpService: HttpService) {

  }

  ngOnInit(): void {
    this.httpService.getActivities().subscribe({
      next: (res) => {
        console.log(res)
        this.activities = res;
      },
      error: (err) => {
        console.log(err);
      }
    })

  }


}
