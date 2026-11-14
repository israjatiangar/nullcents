import { createContext, useEffect, useState } from "react";

type typFavouriteList = Map<typApiName, Array<number | null>>;

type typFavouriteContext = {
  favouriteList: typFavouriteList;
  toggleFavourite: (apiName: typApiName, id: number) => void;
};

export const FavouriteContext = createContext<typFavouriteContext>({
  favouriteList: new Map(),
  toggleFavourite: () => {},
});

export default function FavouriteContextProvider({ children }) {
  const [favouriteList, setFavouriteList] = useState<typFavouriteList>(
    new Map(),
  );

  useEffect(() => {
    const abort = new AbortController().abort();
    const localFavouriteList =
      new Map(JSON.parse(localStorage.getItem("favouriteList"))) ?? new Map();
    setFavouriteList(localFavouriteList);
    return () => abort;
  }, []);

  function toggleFavourite(apiName: typApiName, id: number): void {
    let newFavouriteList: Array<number> = [];
    if (!favouriteList.has(apiName)) {
      newFavouriteList = [id];
    } else if (favouriteList.get(apiName).includes(id)) {
      newFavouriteList = favouriteList.get(apiName).filter((favId: number) => {
        return favId !== id;
      });
    } else {
      newFavouriteList = [...favouriteList.get(apiName), id];
    }
    setFavouriteList((prevFav) => {
      const newFav = new Map([...prevFav, [apiName, newFavouriteList]]);
      localStorage.setItem("favouriteList", JSON.stringify([...newFav]));
      return newFav;
    });
  }
  return (
    <FavouriteContext.Provider
      value={{ favouriteList: favouriteList, toggleFavourite: toggleFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
