import { createContext } from "react";

const GamesListContext = createContext([]);

export default function GamesListContextProvider() {
  return <GamesListContext.Provider value={[]}></GamesListContext.Provider>;
}
