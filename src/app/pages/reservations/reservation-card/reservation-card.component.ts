import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReservationDetailResponse} from '../../../models/reserve-detail-response.model';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {HttpService} from '../../../services/http/http.service';
import {ToastService} from '../../../services/toast/toast.service';

@Component({
  selector: 'app-reservation-card',
  imports: [
    DatePipe
  ],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css'
})
export class ReservationCardComponent {
  @Input() reservation?: ReservationDetailResponse;
  @Output() reservationDeleted = new EventEmitter<void>();


  constructor(private readonly httpService: HttpService, private readonly router: Router, private readonly toastService: ToastService) {

  }

  onSubmit() {
    if (!this.reservation) return;
    const activityId = this.reservation.activity.id;
    this.httpService.deleteReservation(activityId).subscribe({
      next: (response) => {
        this.toastService.show('Reserva borrada con éxito', false);
        this.reservationDeleted.emit();
      },
      error: (err) => {
        this.toastService.show('Error al borrar la reserva', true);
      }

    })

  }
}
