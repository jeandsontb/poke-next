import { useState } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Card, Grid, Text, Button, Container, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { Layout } from "../../components/layout";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";
import { storageFavorites } from "../../utils";
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(
    storageFavorites.existsPokemonFavorites(pokemon.id)
  );

  const handleSaveFavorites = () => {
    storageFavorites.getSaveFavorites(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      return;
    }

    confetti({
      zIndex: 99,
      particleCount: 100,
      spread: 160,
      angle: -120,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button
                color="gradient"
                ghost={!isFavorite}
                onPress={handleSaveFavorites}
              >
                {isFavorite ? "Salvo em Favoritos" : "Salvar em Favoritos"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons156 = [...Array(156)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons156.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  // const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  // const pokemonData = {
  //   id: data.id,
  //   name: data.name,
  //   sprites: data.sprites,
  // };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};
