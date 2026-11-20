import { lazy, Suspense, useContext, useEffect, useState } from "react";
import Section from "../components/Section";
import { GamesListContext } from "../contexts/GamesListContext";
import FreeToGamesCardSkeleton from "../components/FreeToGamesCard/FreeToGamesCardSkeleton";

const GamerPowerCard = lazy(
  () => import("../components/GamerPowerCard/GamerPowerCard"),
);

export default function FreeToGamesPage() {
  const DISPLAY_NUMBER = 24;
  const [count, setCount] = useState([0, DISPLAY_NUMBER]);
  const { gamerPowerList } = useContext(GamesListContext);
  const displayList = gamerPowerList.slice(count[0], count[1]);
  const [pagination, setPagination]: [Array<number>, Function] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(gamerPowerList.length / DISPLAY_NUMBER);
    const newPagination: Array<number> = [];
    for (let i = 0; i < totalPages; i++) {
      newPagination.push(i);
    }
    setPagination(newPagination);
  }, [gamerPowerList]);

  const Page = {
    goto: (n: number) => {
      const totalPages = Math.ceil(gamerPowerList.length / DISPLAY_NUMBER);
      const p = Math.min(Math.max(n, 0), totalPages - 1);
      setCount([p * DISPLAY_NUMBER, p * DISPLAY_NUMBER + DISPLAY_NUMBER]);
    },
    change: (dir: -1 | 1) => {
      const total = gamerPowerList.length;

      if (dir === -1 && count[0] > 0) {
        setCount([count[0] - DISPLAY_NUMBER, count[0]]);
      } else if (dir === 1 && count[0] + DISPLAY_NUMBER < total) {
        setCount([count[0] + DISPLAY_NUMBER, count[0] + 2 * DISPLAY_NUMBER]);
      }
      return;
    },
  };
  return (
    <Section className="place-items-center space-y-4">
      <header className="w-full">
        <h2 className="text-4xl font-bold">Giveaways</h2>
      </header>
      <div className="grid grid-cols-1 gap-4 transition-all transition-discrete duration-300 sm:grid-cols-2 md:grid-cols-3">
        {displayList.map((card, index) => (
          <Suspense fallback={<FreeToGamesCardSkeleton />} key={index}>
            <GamerPowerCard game={card} key={index} />
          </Suspense>
        ))}
      </div>
      <div className="join">
        <button className="join-item btn" onClick={() => Page.change(-1)}>
          «
        </button>
        {pagination.map((item, index) => (
          <button
            className={`join-item btn ${item === count[0] / DISPLAY_NUMBER ? "btn-primary" : ""}`}
            key={index}
            onClick={() => Page.goto(item)}
          >
            {item + 1}
          </button>
        ))}
        <button className="join-item btn" onClick={() => Page.change(1)}>
          »
        </button>
      </div>
    </Section>
  );
}
