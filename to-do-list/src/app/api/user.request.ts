import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginReq, ILoginResp, IUserReq, IUserResp } from '../interfaces/user.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserRequest {
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(formData: IUserReq) {
    return this.http.post<IUserResp>(
      `${this.BASE_URL}/user/register`,
      formData
    );
  }

  login(formData: ILoginReq) {
    return this.http.post<ILoginResp>(`${this.BASE_URL}/auth/login`, formData);
  }


  getUserById() {
    const token = localStorage.getItem('to-do-list:token');

    if (token) {
      const decoded = jwtDecode(token);

      return this.http.get<IUserResp>(
        `${this.BASE_URL}/user/${decoded.sub}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      return null;
    }
  }
}
