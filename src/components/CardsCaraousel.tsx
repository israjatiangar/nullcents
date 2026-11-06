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
    <div className="bg-base-300 relative scroll-smooth p-12">
      <div className="carousel carousel-start flex w-full gap-4 rounded">
        {gamerPowerList &&
          gamerPowerList.map((game, index) => {
            return (
              index < 10 && (
                <Suspense fallback={<GamerPowerCardSkeleton />}>
                  <div className="carousel-item flex-1" key={index}>
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
