import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ILoginReq } from '../../../interfaces/user.interface';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  constructor(private userService: UserService) {}

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
  })

  onSubmit() {
    const data = this.loginForm.value as ILoginReq
    this.userService.login(data)
  }
}
