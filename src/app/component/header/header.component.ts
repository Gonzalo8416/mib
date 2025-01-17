import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  agentName:string|null = '';
  @Input() activeComponent: string = '';
  @Output() activeComponentChange = new EventEmitter<string>();
  componentAvtibeT: string = ''

  ngOnInit(){
    if (typeof window !== 'undefined' && window.localStorage) {
      this.agentName = localStorage.getItem('shortName');
      this.componentAvtibeT = "fugitivos"
    }
  }

  setActiveComponent(component: string) {
    this.componentAvtibeT = component;
    this.activeComponentChange.emit(component);
  }

  isActiveClass(componentt:string){
    return componentt == this.componentAvtibeT
  }
}
