import FavouriteContextProvider from "./FavouriteContext";
import GamesListContextProvider from "./GamesListContext";

export default function AppProvider({ children }) {
  return (
    <GamesListContextProvider>
      <FavouriteContextProvider>{children}</FavouriteContextProvider>
    </GamesListContextProvider>
  );
}
