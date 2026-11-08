import { useContext } from "react";
import { BookmarkIcon } from "@phosphor-icons/react/dist/ssr";
import { BookmarkContext } from "../contexts/BookmarkContext";

export default function BookmarkButton({
  isBookmarked = false,
  id,
}: {
  isBookmarked: boolean;
  id: number;
}) {
  const { toggleBookmark } = useContext(BookmarkContext);
  return (
    <button
      className={`btn btn-soft btn-accent btn-square absolute top-2 right-2 transition active:translate-y-1 ${isBookmarked && "btn-active"}`}
      onClick={() => {
        toggleBookmark(id);
      }}
    >
      <BookmarkIcon weight={isBookmarked ? `fill` : `duotone`} fontSize={24} />
    </button>
  );
}
