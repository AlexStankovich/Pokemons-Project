export class PokemonApiResponse {
  id: number;
  name: string;
  sprites: PokemonApiSprites;
}

export class PokemonApiSprites {
  front_shiny: string;
}
