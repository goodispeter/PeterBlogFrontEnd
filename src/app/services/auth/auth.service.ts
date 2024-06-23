import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../../models/dto/signUpRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/api/user/signup';

  constructor(private http: HttpClient) { }

  userSignUp(signUpRequest: SignUpRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, signUpRequest);
  }
}
