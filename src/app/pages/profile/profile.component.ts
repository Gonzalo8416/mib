import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() isVisible: boolean = false;
  @Output() closeProfile = new EventEmitter<void>();
  agentName:string|null = '';
  showModal:boolean = false;
  showWhiteScreen: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(){
    if (typeof window !== 'undefined' && window.localStorage) {
      this.agentName = localStorage.getItem('shortName');
    }
  }
  close() {
    this.closeProfile.emit(); // Emite evento al padre para cerrar el perfil
  }
  isModal(){
    this.showModal = !this.showModal;
  }
  logout() {
    this.showWhiteScreen = true;
    setTimeout(() => {
      this.router.navigate(['/']); // Redirige a la página de inicio de sesión
    }, 3000); // 1 segundo de pantalla blanca antes de la redirección
  }

}
