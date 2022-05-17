import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonApiResponse } from '../models/pokemon-api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Array<Pokemon>> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=10')
      .pipe(
        mergeMap((res) => {
          let pokemonUrls: Array<any> = res.results;
          let pokemonsBatch = new Array<Observable<any>>();
          let pokemons = new Array<Pokemon>();
          pokemonUrls.forEach((pokemon) => {
            pokemonsBatch.push(
              this.http.get<PokemonApiResponse>(pokemon.url).pipe(
                mergeMap((newPokemon: PokemonApiResponse) => {
                  let singlePokemon = new Pokemon(newPokemon);
                  return this.http
                    .get<any>(
                      `https://pokeapi.co/api/v2/characteristic/${newPokemon.id}`
                    )
                    .pipe(
                      map((element) => {
                        singlePokemon.description =
                          element.descriptions[7].description;
                        pokemons.push(singlePokemon);
                      })
                    );
                })
              )
            );
          });
          return forkJoin(pokemonsBatch).pipe(
            map(() => {
              return pokemons;
            })
          );
        })
      );
  }
}
