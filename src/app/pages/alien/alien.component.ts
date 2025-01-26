import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import 'img-comparison-slider';
import { ActivatedRoute, RouterLink  } from '@angular/router';
import { Alien } from '../../interface/alien.interface';
import { aliens } from '../../util/aliens.util';

@Component({
  selector: 'app-alien',
  imports: [RouterLink],
  templateUrl: './alien.component.html',
  styleUrl: './alien.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlienComponent implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: false }) slider!: ElementRef;
  sections = {
    planeta: false,
    especies: false,
    antecedentes: false
  };

  alien?: Alien;
  constructor(
    private readonly route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.alien = aliens.find((a) => a.name === name);
    console.log('Alien:', this.alien);
  }

  ngAfterViewInit(): void {
    // Verificar si estamos en el navegador antes de ejecutar código dependiente del DOM
    if (isPlatformBrowser(this.platformId)) {
      if (!customElements.get('img-comparison-slider')) {
        console.error('El componente img-comparison-slider no está inicializado correctamente.');
      }
    }
  }
  toggleSection(section: keyof typeof this.sections): void {
    this.sections[section] = !this.sections[section];
  }
}
