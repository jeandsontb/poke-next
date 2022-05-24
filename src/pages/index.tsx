import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layout";
import pokeApi from "../api/pokeApi";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listagem de Pokemons">
      <>
        <ul>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
          <li>Pokemón</li>
        </ul>
      </>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    props: {
      pokemons: data.results,
    },
  };
};
