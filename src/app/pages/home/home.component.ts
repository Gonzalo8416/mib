import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { AliensComponent } from '../../component/aliens/aliens.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AliensComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeComponent: string = 'fugitivos';
}
