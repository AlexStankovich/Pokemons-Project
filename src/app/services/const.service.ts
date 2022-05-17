import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstService {
  constructor() {}

  public static readonly pokemonStorageKey: string = 'pokemons';
}
