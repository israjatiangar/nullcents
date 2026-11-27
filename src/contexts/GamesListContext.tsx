import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { fetchDataFromAPILink, getAPIfromLocal } from "../utilities/apiHelper";

const [FREETOGAME_API, GAMERPOWER_API]: [string, string] = [
  "https://www.freetogame.com/api/games",
  "https://www.gamerpower.com/api/giveaways",
];
type typGameListContext = {
  freeToGamesList: Array<typFreeToGames>;
  gamerPowerList: Array<typGamerPower>;
};
export const GamesListContext = createContext<typGameListContext>({
  freeToGamesList: [],
  gamerPowerList: [],
});

export default function GamesListContextProvider({
  children,
}: PropsWithChildren) {
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
      fetchDataFromAPILink(FREETOGAME_API, "freeToGamesData").then((result) => {
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
      fetchDataFromAPILink(GAMERPOWER_API, "gamerPowerData").then((result) => {
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
    <GamesListContext.Provider
      value={{
        freeToGamesList,
        gamerPowerList,
      }}
    >
      {children}
    </GamesListContext.Provider>
  );
}
