import { createContext, useEffect, useState } from "react";

type typFavouriteContext = {
  favouriteList: Array<number>;
  toggleFavourite: (id: number) => void;
};

export const FavouriteContext = createContext<typFavouriteContext>({
  favouriteList: [],
  toggleFavourite: () => {},
});

export default function FavouriteContextProvider({ children }) {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    const abort = new AbortController().abort();
    const localFavouriteList =
      JSON.parse(localStorage.getItem("favouriteList")) ?? [];
    setFavouriteList(localFavouriteList);
    return () => abort;
  }, []);

  function toggleFavourite(id: number): void {
    let newFavouriteList: Array<number> = [];
    if (favouriteList.includes(id)) {
      newFavouriteList = favouriteList.filter((favId) => {
        return favId !== id;
      });
    } else {
      newFavouriteList = [...favouriteList, id];
    }
    localStorage.setItem("favouriteList", JSON.stringify(newFavouriteList));
    setFavouriteList(newFavouriteList);
  }
  return (
    <FavouriteContext.Provider
      value={{ favouriteList: favouriteList, toggleFavourite: toggleFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
