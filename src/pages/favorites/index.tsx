import { useEffect, useState } from "react";
import { Card, Grid } from "@nextui-org/react";

import { Layout } from "../../components/layout";
import { NoFavoritePage } from "../../components/ui";
import { storageFavorites } from "../../utils";
import { FavoritPokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(storageFavorites.pokemonsFavorited());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavoritePage />
      ) : (
        <FavoritPokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
