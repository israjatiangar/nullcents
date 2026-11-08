import BookmarkContextProvider from "./BookmarkContext";
import GamesListContextProvider from "./GamesListContext";

export default function AppProvider({ children }) {
  return (
    <GamesListContextProvider>
      <BookmarkContextProvider>{children}</BookmarkContextProvider>
    </GamesListContextProvider>
  );
}
