import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputName: FormControl = new FormControl('');
  errorMessage: boolean = false;
  route = new Router()
  login(){
    const name = this.inputName.value.trim();
    if(!name){
      this.errorMessage = true;
      return;
    }
    localStorage.setItem('name', name);
    this.route.navigate(['intro']);
  }
}
