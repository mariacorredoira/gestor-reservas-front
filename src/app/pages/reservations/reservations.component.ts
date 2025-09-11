import {Component, OnInit} from '@angular/core';
import {ReservationDetailResponse} from '../../models/reserve-detail-response.model';
import {HttpService} from '../../services/http/http.service';
import {ReservationCardComponent} from './reservation-card/reservation-card.component';


@Component({
  selector: 'app-reservations',
  imports: [
    ReservationCardComponent
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {

  public reservations: ReservationDetailResponse[] = [];

  constructor(private readonly httpService: HttpService) {

  }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.httpService.getReservation().subscribe({
      next: (res) => {
        this.reservations = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
