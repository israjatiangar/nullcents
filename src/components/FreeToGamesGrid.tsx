import { lazy, Suspense, useContext, useMemo, useState } from "react";
// import FreeToGamesCard from "./FreeToGamesCard/FreeToGamesCard";
const FreeToGamesCard = lazy(() => import("./FreeToGamesCard/FreeToGamesCard"));
import { GamesListContext } from "../contexts/GamesListContext";
import { ArrowUpIcon } from "@phosphor-icons/react";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import FreeToGamesCardSkeleton from "./FreeToGamesCard/FreeToGamesCardSkeleton";

export default function FreeToGamesGrid() {
  const [cardCount, setCardCount] = useState(20);
  const { freeToGamesList } = useContext(GamesListContext);
  const [filteredItems, setFilteredItems] = useState<Array<string>>([]);
  const platformName = [
    ...new Set(
      freeToGamesList.flatMap((item) =>
        item.platform.split(",").map((item) => item.trim()),
      ),
    ),
  ];
  const Filter = {
    byPlatform: function (platformName: string) {
      setFilteredItems((previousItems) =>
        previousItems.includes(platformName)
          ? previousItems.filter((item) => item !== platformName.trim())
          : [...previousItems, platformName.trim()],
      );
    },
    reset: function () {
      setFilteredItems([]);
    },
  };
  const displayCardsList = useMemo(() => {
    const filtered =
      filteredItems.length === 0
        ? freeToGamesList
        : freeToGamesList.filter((item) => {
            const platforms = item.platform
              .split(",")
              .map((platformString) => platformString.trim());
            return filteredItems.every((item) => platforms.includes(item));
          });
    return filtered.slice(0, cardCount);
  }, [cardCount, freeToGamesList, filteredItems]);

  function changeDisplayListLength() {
    setCardCount((prevCardsCount) =>
      prevCardsCount === 20 ? 40 : prevCardsCount === 40 ? 60 : 20,
    );
  }

  return (
    <>
      <form className="mb-6 filter">
        {platformName.map((item, index) => {
          return (
            <input
              className="btn btn-sm btn-soft"
              type="checkbox"
              name="platform"
              onClick={() => Filter.byPlatform(item)}
              aria-label={`${item}`}
              key={index}
            />
          );
        })}
        <input
          className="btn btn-sm btn-square"
          type="reset"
          value="×"
          onClick={() => Filter.reset()}
        />
      </form>
      <div className="grid grid-cols-1 gap-4 transition-all transition-discrete duration-300 lg:grid-cols-2">
        {displayCardsList.map((card, index) => (
          <Suspense key={index} fallback={<FreeToGamesCardSkeleton />}>
            <FreeToGamesCard card={card} />
          </Suspense>
        ))}
      </div>

      <button
        className="btn btn-primary my-2 w-fit"
        onClick={() => changeDisplayListLength()}
      >
        {cardCount === 60 ? (
          <>
            <ArrowUpIcon /> View Less
          </>
        ) : (
          <>
            <ArrowDownIcon />
            View More
          </>
        )}
      </button>
    </>
  );
}
