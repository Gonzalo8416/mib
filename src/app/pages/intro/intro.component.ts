import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
 name:string | null = '';
 fullName:string | null = '';
 route = new Router();
 loginShip: string = './app/assets/icons/loginShip.svg';
 ngOnInit(){
  this.fullName = localStorage.getItem('name');
  this.name = this.fullName ? this.fullName.charAt(0).toUpperCase() : null;
  localStorage.setItem('shortName' , this.name!)
 };
 goHome(){
  this.route.navigate(['home']);
 }
}
