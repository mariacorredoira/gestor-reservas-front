import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRequest} from "../../models/user-request.model";
import {LoginRequest} from '../../models/login-request.model';
import {RegisterResponse} from '../../models/register-response.model';
import {LoginResponse} from '../../models/login-response.model';
import {ActivityDetailResponse} from '../../models/activity-detail-response.model';
import {ReserveRequest} from '../../models/reserve-request..model';
import {ReserveResponse} from '../../models/reserve-response.model';
import {ReservationDetailResponse} from '../../models/reserve-detail-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  register(userRequest: UserRequest): Observable<RegisterResponse> {
    console.log("entra register");
    console.log(userRequest);
    return this.http.post<RegisterResponse>(`${this.baseUrl}/users`, userRequest);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/users/login`, loginRequest);
  }

  reserve(reserveRequest: ReserveRequest): Observable<ReserveResponse> {
    return this.http.post<ReserveResponse>(`${this.baseUrl}/reservations`, reserveRequest);
  }

  getActivities(): Observable<ActivityDetailResponse[]> {
    return this.http.get<ActivityDetailResponse[]>(`${this.baseUrl}/activities`);
  }

  getDetails(activityId: number): Observable<ActivityDetailResponse> {
    return this.http.get<ActivityDetailResponse>(`${this.baseUrl}/activities/${activityId}`);
  }

  getReservation(): Observable<ReservationDetailResponse[]> {
    return this.http.get<ReservationDetailResponse[]>(`${this.baseUrl}/reservations`);
  }

  deleteReservation(activityId: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/reservations/${activityId}`);
  }

}

