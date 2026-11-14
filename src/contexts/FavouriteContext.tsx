import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type typFavouriteList = Map<typApiName, Array<number | null>>;

type typFavouriteContext = {
  favouriteList: typFavouriteList;
  toggleFavourite: (apiName: typApiName, id: number) => void;
};

export const FavouriteContext = createContext<typFavouriteContext>({
  favouriteList: new Map(),
  toggleFavourite: () => {},
});

export default function FavouriteContextProvider({
  children,
}: PropsWithChildren) {
  const [favouriteList, setFavouriteList] = useState<typFavouriteList>(
    new Map(),
  );

  useEffect(() => {
    const abort = new AbortController().abort();
    const localFavouriteList =
      localStorage.getItem("favouriteList") !== null
        ? new Map(JSON.parse(String(localStorage.getItem("favouriteList"))))
        : new Map();
    setFavouriteList(localFavouriteList);
    return () => abort;
  }, []);

  function toggleFavourite(apiName: typApiName, id: number): void {
    const existing = favouriteList.get(apiName) ?? [];
    const newFavouriteList = existing.includes(id)
      ? existing.filter((favId) => favId !== id)
      : [...existing, id];

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
