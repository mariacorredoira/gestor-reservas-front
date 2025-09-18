import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserDetailResponse} from '../../../models/user-detail-response.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../services/http/http.service';
import {ToastService} from '../../../services/toast/toast.service';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user?: UserDetailResponse;
  @Output() userDeleted = new EventEmitter<void>();

  constructor(private readonly httpService: HttpService, private readonly route: ActivatedRoute, private readonly router: Router, private readonly toastService: ToastService) {
  }

  onSubmit() {
    const userId = this.user?.id;
    if (!userId) return;
    this.httpService.deleteUser(userId).subscribe({
      next: (response) => {
        this.toastService.show('Usuario borrado con éxito', false);
        this.userDeleted.emit();
      },
      error: (err) => {
        this.toastService.show('Error al borrar al usuario', true);
      }
    })
  }
}







