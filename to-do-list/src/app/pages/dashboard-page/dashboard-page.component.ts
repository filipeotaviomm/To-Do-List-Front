import { Component, HostListener } from '@angular/core';
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

  @HostListener('document:click', ['$event']) // Isso faz com que o Angular ouça qualquer clique no documento inteiro
  onClickOutside(event: Event) { // esta função está sendo chamada automaticamente pelo Angular através do @HostListener.
    const userMenuElement = document.querySelector('app-user-menu');
    
    if (userMenuElement && !userMenuElement.contains(event.target as Node)) {
      this.userService.setIsUserMenuOpen(false);
    }
  }
}
