import { createContext, useEffect, useState, type ReactNode } from "react";
import { fetchDataFromAPILink, getAPIfromLocal } from "../utilities/apiHelper";

export const GamesListContext = createContext([]);

export default function GamesListContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [getGamesList, setGamesList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const local = getAPIfromLocal("freeToGamesData");
    if (local.error) {
      fetchDataFromAPILink(
        "https://www.freetogame.com/api/games",
        "freeToGamesData",
      ).then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          setGamesList(result.data);
        }
      });
    } else {
      setGamesList(local.data);
    }
    return () => controller.abort();
  }, []);
  return (
    <GamesListContext.Provider value={getGamesList}>
      {children}
    </GamesListContext.Provider>
  );
}
