import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstService {
  constructor() {}

  public static readonly pokemonStorageKey: string = 'pokemons';
  public static readonly cards: string = 'cards-view';
  public static readonly table: string = 'tabelar-view';
  public static readonly accordion: string = 'accordion-view';
}
