import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: 'user-settings.component.html',
  styleUrls: ['user-settings.component.scss'],
})

export class UserSettingsComponent {

  constructor(
    private router: Router) {
  }

  dropdownOpen: boolean = false;

  toogleClass(){
    this.dropdownOpen = !this.dropdownOpen;
  }

  logOut(){
    window.location.reload();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}

