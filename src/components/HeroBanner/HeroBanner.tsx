import { useContext, useEffect, useState } from "react";
import {
  getCurrentDate,
  getLocaleDateString,
  sortByDate,
} from "../../utilities/DateAndTimeHelper";
import { GamesListContext } from "../../contexts/GamesListContext";

export default function HeroBanner() {
  const { gamerPowerList } = useContext(GamesListContext);
  let HeroBannerList: Array<typGamerPower> = gamerPowerList;
  if (HeroBannerList) {
    const now = getCurrentDate();
    HeroBannerList = HeroBannerList.filter(
      (item) => new Date(item.end_date).getTime() >= now,
    ).sort((itemA, itemB) =>
      sortByDate(itemA.end_date, itemB.end_date, "Descending"),
    );
  }
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const TICK = 100;
  let featured = HeroBannerList[count];

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setTimer((prevTimer) => (prevTimer === TICK ? 0 : (prevTimer += 1)));
      if (timer === TICK) {
        setCount((prevCount) => (prevCount === 5 ? 0 : (prevCount += 1)));
      }
    }, TICK);
    return () => clearTimeout(timeoutID);
  }, [count, timer]);

  return !featured ? null : (
    <article
      className="hero rounded-selector min-h-[80dvh] bg-size-[100%_100%] duration-500 hover:bg-size-[105%_105%]"
      style={{
        backgroundImage: `linear-gradient(to bottom, #0001, #000 ), url(${featured.image})`,
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content w-full place-content-start place-items-end place-self-end">
        <div className="flex w-6/12 flex-1 flex-col gap-2">
          <header>
            <h1 className="line-clamp-2 py-2 text-5xl font-bold text-pretty">
              {featured.title}
            </h1>
          </header>
          <div className="mb-2 flex flex-col gap-2">
            <div className="flex gap-2">
              {featured.platforms.split(",").map((item) => {
                return <span className="badge badge-info">{item}</span>;
              })}
            </div>
            <span className="badge bage-sm badge-primary badge-outline">
              Offer ends: {getLocaleDateString(featured.end_date)}
            </span>
            <p className="line-clamp-3">{featured.description}</p>
          </div>
          <div className="flex gap-2">
            <a
              className="btn btn-soft btn-primary"
              href={featured.open_giveaway_url}
              target="_blank"
            >
              Claim Offer
            </a>
            <a
              className="btn btn-soft btn-neutral"
              href={featured.gamerpower_url}
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
        <progress
          className="progress w-1/3"
          value={timer}
          max={TICK}
        ></progress>
      </div>
    </article>
  );
}
