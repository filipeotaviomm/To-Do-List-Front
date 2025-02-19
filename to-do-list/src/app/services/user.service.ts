import { Injectable, signal } from '@angular/core';
import { ILoginReq, IUserReq, IUserResp } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { UserRequest } from '../api/user.request';
import { HttpErrorResponse } from '@angular/common/http';
import { publicRoutes } from '../app.routes';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly userSignal = signal<IUserResp | null>(null);
  getUser() {
    return this.userSignal();
  }


  readonly isUserMenuOpen = signal<boolean>(false);
  setIsUserMenuOpen(value: boolean) {
    this.isUserMenuOpen.set(value);
  }


  constructor(private userRequest: UserRequest, private router: Router, private toastr: ToastrService) {
    //autologin
    const pathname = window.location.pathname;
    this.userRequest.getUserById()?.subscribe({
      next: (data) => {
        this.userSignal.set(data);
        if (publicRoutes.includes(pathname)) {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl(pathname);
        }
      },
      error: (error) => {
        console.log(error);
        this.logout();
      },
    });
  }

  register(formData: IUserReq) {
    this.userRequest.register(formData).subscribe({
      next: () => {
        this.toastr.success('Registration completed successfully');
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          this.toastr.error(error.error.message);
        }
      },
    });
  }

  login(formData: ILoginReq) {
    this.userRequest.login(formData).subscribe({
      next: (data) => {
        localStorage.setItem('to-do-list:token', data.token);
        this.getUserById();
        this.toastr.success('Going to Dashboard');
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          this.toastr.error(error.error.message);
        }
      },
    });
  }


  getUserById() {
    this.userRequest.getUserById()?.subscribe({
      next: (data) => {
        this.userSignal.set(data)
      },
      error: (error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          this.toastr.error(error.error.message);
        }
      },
    })
  }


  logout() {
    this.router.navigateByUrl('/');
    this.userSignal.set(null);
    localStorage.removeItem('to-do-list:token');
    this.isUserMenuOpen.set(false);
  }
}
