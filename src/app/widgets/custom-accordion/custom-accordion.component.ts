import { Component, Input, OnInit } from '@angular/core';
import { accordionToggle, svgRotate } from 'src/app/common/animations';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
  animations: [accordionToggle, svgRotate],
})
export class CustomAccordionComponent implements OnInit {
  constructor() {}

  clicked: boolean = false;
  state: string = 'default';
  @Input() pokemon: Pokemon;

  ngOnInit() {}

  onHeaderClick() {
    this.clicked = !this.clicked;
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }
}
