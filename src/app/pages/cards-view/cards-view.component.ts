import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss'],
})
export class CardsViewComponent implements OnInit {
  displayedPokemons: Array<Pokemon> = new Array<Pokemon>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.resetPokemonEdit();
    this.displayedPokemons = this.dataService.addedPokemons;
  }

  onDisplayedPokemonsChanged(displayedPokemons: Array<Pokemon>) {
    this.displayedPokemons = displayedPokemons;
  }
}
