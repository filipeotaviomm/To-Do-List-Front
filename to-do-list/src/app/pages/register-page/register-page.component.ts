import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterFormComponent } from '../../components/forms/register-form/register-form.component';
import { StripeComponent } from "../../components/stripe/stripe.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RegisterFormComponent, StripeComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
