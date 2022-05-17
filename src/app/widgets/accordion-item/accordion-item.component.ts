import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit {
  clicked: boolean = false;
  constructor() {}
  @Input() pokemon: Pokemon;
  ngOnInit() {}

  toggleAccordion(): void {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
}
