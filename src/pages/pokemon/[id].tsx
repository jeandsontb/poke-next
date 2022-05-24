import { Layout } from "../../components/layout";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  return (
    <Layout title="Algun pokemon">
      <h1>Holá mundo</h1>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      id: 2,
      name: "bubasaur",
    },
  };
};
