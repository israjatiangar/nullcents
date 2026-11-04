import { createContext, useEffect, useState, type ReactNode } from "react";
import { minutesToMilliseconds } from "../utilities/DateAndTimeHelper";

export const GamesListContext = createContext([]);

export default function GamesListContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [getGamesList, setGamesList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const stored = localStorage.getItem("storedData");
    if (stored) {
      const storedData: typLocalData = JSON.parse(stored);
      const expiry = new Date(storedData.expiresAt).getTime();
      if (expiry > Date.now()) {
        console.log("retrieved from local");
        setGamesList(storedData.data);
        return;
      }
    }
    fetch("https://www.freetogame.com/api/games")
      .then((response) => {
        console.log("fetched");
        if (!response.ok) {
          throw Error(response.status.toString());
        }
        return response.json() as Promise<Array<typFreeToGames>>;
      })
      .then((gamesList) => {
        setGamesList(gamesList);
        const expiry = new Date(Date.now() + minutesToMilliseconds(10));
        const storageItem: typLocalData = {
          expiresAt: expiry,
          data: gamesList,
        };
        localStorage.setItem("storedData", JSON.stringify(storageItem));
      })
      .catch((error) => {
        console.error("Could not load games:", error);
      });
    return () => controller.abort();
  }, []);
  return (
    <GamesListContext.Provider value={getGamesList}>
      {children}
    </GamesListContext.Provider>
  );
}
