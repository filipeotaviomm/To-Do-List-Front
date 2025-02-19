import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private userService: UserService) {
    this.isUserMenuOpen = this.userService.isUserMenuOpen;
  }

  @Input() userInfo: any;

  isUserMenuOpen!: Signal<boolean>; // Usa "!" para indicar que será inicializado depois
  


  OpenUserMenu(){
    this.userService.setIsUserMenuOpen(true);
  }


}
