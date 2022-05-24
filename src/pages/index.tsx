import { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layout";

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
  console.log("opa");

  return {
    props: {},
  };
};
