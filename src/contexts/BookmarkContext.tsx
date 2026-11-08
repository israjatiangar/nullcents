import { createContext, useState } from "react";

type typBookmarkContext = {
  bookmarkList: Array<number>;
  toggleBookmark: (id: number) => void;
};

export const BookmarkContext = createContext<typBookmarkContext>({
  bookmarkList: [],
  toggleBookmark: () => {},
});

export default function BookmarkContextProvider({ children }) {
  const [bookmarkList, setBookmarkList] = useState([]);

  function toggleBookmark(id: number): void {
    let newBookmarkList: number[] = [];
    if (bookmarkList.includes(id)) {
      newBookmarkList = bookmarkList.filter((id) => {
        return id !== id;
      });
    } else {
      newBookmarkList = [...bookmarkList, id];
    }
    setBookmarkList(newBookmarkList);
  }
  return (
    <BookmarkContext.Provider value={{ bookmarkList, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}
