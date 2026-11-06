import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPILink, getAPIfromLocal } from "../utilities/apiHelper";

export const GamesListContext = createContext({
  freeToGamesList: [],
  gamerPowerList: [],
});

export default function GamesListContextProvider({ children }) {
  const [freeToGamesList, setFreeToGamesList] = useState<typFreeToGames[] | []>(
    [],
  );
  const [gamerPowerList, setGamerPowerList] = useState<typGamerPower[] | []>(
    [],
  );

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
          setFreeToGamesList(result.data);
        }
      });
    } else {
      setFreeToGamesList(local.data);
    }
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const local = getAPIfromLocal("gamerPowerData");
    console.log("gamerPowerList");
    if (local.error) {
      fetchDataFromAPILink(
        "https://www.gamerpower.com/api/giveaways",
        "gamerPowerData",
      ).then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          setGamerPowerList(result.data);
        }
      });
    } else {
      setGamerPowerList(local.data);
    }
    return () => controller.abort();
  }, []);

  return (
    <GamesListContext.Provider value={{ freeToGamesList, gamerPowerList }}>
      {children}
    </GamesListContext.Provider>
  );
}
