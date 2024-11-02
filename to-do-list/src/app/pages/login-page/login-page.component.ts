import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/forms/login-form/login-form.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StripeComponent } from "../../components/stripe/stripe.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent, RouterLink, RouterLinkActive, StripeComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
}
