import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ProfileComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  agentName:string|null = '';
  showProfile: boolean = false;

  ngOnInit(){
    if (typeof window !== 'undefined' && window.localStorage) {
      this.agentName = localStorage.getItem('shortName');
    }
  }
  toggleProfile() {
    this.showProfile = !this.showProfile;
  }
}
