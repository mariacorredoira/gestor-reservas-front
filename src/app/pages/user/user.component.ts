import {Component, OnInit} from '@angular/core';
import {UserDetailResponse} from '../../models/user-detail-response.model';
import {HttpService} from '../../services/http/http.service';
import {UserCardComponent} from './user-card/user-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    UserCardComponent,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: UserDetailResponse[] = [];

  constructor(private readonly httpService: HttpService) {

  }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(): void {
    this.httpService.getUsers().subscribe({
      next: (res) => {
        console.log(res)
        this.users = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
