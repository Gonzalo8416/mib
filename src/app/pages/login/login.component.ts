import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputName: FormControl = new FormControl('');
  errorMessage: boolean = false;
  route = new Router()
  login(e: Event): void {
    e.preventDefault(); // Evita que la página se recargue

    const name = this.inputName.value?.trim();
    if (!name) {
      this.errorMessage = true;
      return;
    }

    localStorage.setItem('name', name);
    this.route.navigate(['intro']); // Navega a la ruta 'intro'
  }
}
