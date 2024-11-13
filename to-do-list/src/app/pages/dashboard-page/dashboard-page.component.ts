import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [ HeaderComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  constructor(private userService: UserService) {}

  get user() {
    return this.userService.getUser();
  }
}
