import React from "react";
import NexLink from "next/link";
import { useTheme, Text, Spacer, Image, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="imagem do pokemón"
        width={70}
        height={70}
      />

      <NexLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemón
          </Text>
        </Link>
      </NexLink>

      <Spacer css={{ flex: 1 }} />

      <NexLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </NexLink>
    </div>
  );
};
