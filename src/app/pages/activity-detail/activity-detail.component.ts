import {Component, OnInit} from '@angular/core';
import {ActivityDetailResponse} from '../../models/activity-detail-response.model';
import {HttpService} from '../../services/http/http.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ReserveRequest} from '../../models/reserve-request..model';
import {ToastService} from '../../services/toast/toast.service';


@Component({
  selector: 'app-activity-detail',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  public details?: ActivityDetailResponse;

  constructor(private readonly httpService: HttpService, private readonly route: ActivatedRoute, private readonly router: Router, private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
    // Obtenemos el ID desde la URL
    const activityId = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getDetails(activityId).subscribe({
      next: (res) => {
        this.details = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onSubmit() {
    if (!this.details?.id) {
      console.error('No hay actividad seleccionada');
      return;
    }
    const reserveRequest: ReserveRequest = {
      idActivity: this.details.id
    };

    this.httpService.reserve(reserveRequest).subscribe({
      next: (response) => {
        this.toastService.show('Actividad registrada con éxito', false);
        this.router.navigate(['/activities']);
      },
      error: (err) => {
        this.toastService.show('Error al reservar la actividad', true);
      }
    });
  }

}
