import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

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

        <meta property="og:title" content={`Informação sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta página é sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
