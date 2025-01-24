import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'img-comparison-slider';
import { ActivatedRoute  } from '@angular/router';
import { Alien } from '../../interface/alien.interface';
import { aliens } from '../../util/aliens.util';

@Component({
  selector: 'app-alien',
  imports: [],
  templateUrl: './alien.component.html',
  styleUrl: './alien.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlienComponent implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  alien?: Alien;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.alien = aliens.find((a) => a.name === name);
    console.log('Alien:', this.alien);
  }

  ngAfterViewInit(): void {
    // Puedes inicializar o verificar algo en el slider aquí si es necesario
    const sliderElement = this.slider.nativeElement as HTMLElement;
    if (!customElements.get('img-comparison-slider')) {
      console.error('El componente img-comparison-slider no está inicializado correctamente.');
    }
  }
}
