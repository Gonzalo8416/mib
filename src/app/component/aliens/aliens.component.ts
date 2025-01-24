import { Component } from '@angular/core';
import { aliens } from '../../util/aliens.util';
import { Alien } from '../../interface/alien.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aliens',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './aliens.component.html',
  styleUrl: './aliens.component.css'
})
export class AliensComponent {
  searchTerm: FormControl = new FormControl('');
  filteredAliens: Alien[] = aliens; // Lista filtrada de aliens.

  // Método para filtrar la lista de aliens.
  filterAliens() {
    const term = this.searchTerm.value.toLowerCase().trim();
    this.filteredAliens = aliens.filter(
      (alien) =>
        alien.name.toLowerCase().includes(term) || alien.city.toLowerCase().includes(term)
    );
  }
}
