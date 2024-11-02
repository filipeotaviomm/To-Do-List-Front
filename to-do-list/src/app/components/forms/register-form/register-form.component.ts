import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { IUserReq } from '../../../interfaces/user.interface';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor(private userService: UserService) {}

  registerForm = new FormGroup({
    profileImageUrl: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    username: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
  })

  onSubmit() {
    const data = this.registerForm.value as IUserReq
    this.userService.register(data)
  }
}

