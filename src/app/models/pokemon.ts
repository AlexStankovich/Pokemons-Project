import { PokemonApiResponse } from './pokemon-api-response';

export class Pokemon extends PokemonApiResponse {
  description: string;
  isEditing: boolean = false;
  additionalInformation: string;
  image: string;

  constructor(newPokemon: PokemonApiResponse) {
    super();
    this.id = newPokemon.id;
    this.name = newPokemon.name;
    this.image = newPokemon.sprites.front_shiny;
  }
}
