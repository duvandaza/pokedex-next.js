import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
    pokemon : number[];
}

export const FavoritesPokemons: FC<Props> = ({pokemon}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
            pokemon.map( id => (
                <FavoriteCardPokemon id={id} key={id} />
            ))
        }

    </Grid.Container>
  )
}
