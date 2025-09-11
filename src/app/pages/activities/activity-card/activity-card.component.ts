import {Component, Input} from '@angular/core';
import {ActivityDetailResponse} from '../../../models/activity-detail-response.model';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-activity-card',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
   @Input() activity? : ActivityDetailResponse;
  constructor() {
  }

}
