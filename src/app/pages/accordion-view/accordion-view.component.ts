import { Component, OnDestroy, OnInit } from '@angular/core';
import { accordionToggle } from 'src/app/common/animations';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accordion-view',
  templateUrl: './accordion-view.component.html',
  styleUrls: ['./accordion-view.component.scss'],
})
export class AccordionViewComponent implements OnInit {
  displayedPokemons: Array<Pokemon> = new Array<Pokemon>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.displayedPokemons = this.dataService.addedPokemons;
  }
}
