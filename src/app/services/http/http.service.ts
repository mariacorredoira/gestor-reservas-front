import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from "../../models/user-request.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  register(userRequest: UserRequest): Observable<any> {
    console.log("entra register");
    console.log(userRequest);
    return this.http.post(`${this.baseUrl}/users`, userRequest);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, credentials);
  }
}
