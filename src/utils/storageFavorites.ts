/* eslint-disable import/no-anonymous-default-export */
import { decorator } from "../decorators";

const getSaveFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem(decorator.favorites) || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((poke) => poke !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(decorator.favorites, JSON.stringify(favorites));
};

const existsPokemonFavorites = (id: number): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const favorites: number[] = JSON.parse(
    localStorage.getItem(decorator.favorites) || "[]"
  );

  return favorites.includes(id);
};

export default { getSaveFavorites, existsPokemonFavorites };
