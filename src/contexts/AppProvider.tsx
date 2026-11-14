import type { PropsWithChildren } from "react";
import FavouriteContextProvider from "./FavouriteContext";
import GamesListContextProvider from "./GamesListContext";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <GamesListContextProvider>
      <FavouriteContextProvider>{children}</FavouriteContextProvider>
    </GamesListContextProvider>
  );
}
