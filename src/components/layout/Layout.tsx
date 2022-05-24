import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  children: JSX.Element;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jeandson" />
        <meta
          name="description"
          content={`Informação sobre pokemón ${title}`}
        />
        <meta name="keywords" content={`${title} pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
