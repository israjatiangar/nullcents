import { lazy, Suspense, useContext } from "react";
import { GamesListContext } from "../contexts/GamesListContext";
const GamerPowerCard = lazy(() => import("./GamerPowerCard/GamerPowerCard"));
import GamerPowerCardSkeleton from "./GamerPowerCard/GamerPowerCardSkeleton";

export default function CardsCaraousel() {
  const { gamerPowerList } = useContext(GamesListContext);
  const count = [];
  for (let i = 0; i < 10; i++) {
    count.push(i);
  }
  return (
    <div className="relative min-h-50">
      <div className="carousel carousel-center md:carousel-start rounded-box w-full space-x-4">
        {gamerPowerList &&
          gamerPowerList.map((game, index) => {
            return (
              index < 10 && (
                <Suspense key={index} fallback={<GamerPowerCardSkeleton />}>
                  <div className="carousel-item" key={index}>
                    <GamerPowerCard game={game} />
                  </div>
                </Suspense>
              )
            );
          })}
      </div>
    </div>
  );
}
