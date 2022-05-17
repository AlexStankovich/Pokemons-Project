import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  allPokemons: Array<Pokemon> = new Array<Pokemon>();
  addedPokemons: Array<Pokemon> = new Array<Pokemon>();

  filterQuery: string;

  loadFromLocalStorage(): void {
    let items = localStorage.getItem('pokemons');
    if (items != null) {
      this.addedPokemons = JSON.parse(items);
    }
  }

  setToLocalStorage(): void {
    localStorage.setItem('pokemons', JSON.stringify(this.addedPokemons));
  }

  filterPokemonsByName(
    pokemonList: Array<Pokemon>,
    filterQuery: string
  ): Array<Pokemon> {
    return pokemonList.filter((x) =>
      x.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }

  addNewPokemon(newPokemon: Pokemon) {
    let isPokemonAdded = this.addedPokemons.findIndex((pokemon) => {
      return pokemon.id == newPokemon.id;
    });
    if (isPokemonAdded === -1) {
      this.addedPokemons.push(newPokemon);
    }
    this.setToLocalStorage();
  }

  removePokemon(id: number): Array<Pokemon> {
    this.addedPokemons = this.addedPokemons.filter((x) => x.id !== id);
    this.setToLocalStorage();
    return this.addedPokemons;
  }

  filterUnaddedPokemons(): Array<Pokemon> {
    return this.allPokemons.filter(
      (x) => !this.addedPokemons.some((y) => x.id == y.id)
    );
  }

  savePokemon(pokemon: Pokemon) {
    let pokemonToUpdate = this.addedPokemons.find((x) => x.id == pokemon.id);
    pokemonToUpdate = pokemon;
  }

  resetPokemonEdit(): void {
    this.addedPokemons.forEach((pokemon) => {
      pokemon.isEditing = false;
    });
  }
}
