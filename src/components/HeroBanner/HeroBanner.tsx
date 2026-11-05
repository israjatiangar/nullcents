import { useContext } from "react";
import { sortByLatest } from "../../utilities/DateAndTimeHelper";
import { GamesListContext } from "../../contexts/GamesListContext";

export default function HeroBanner() {
  let getGamesList: typFreeToGames[] = useContext(GamesListContext);
  if (getGamesList) {
    getGamesList = getGamesList.sort((itemA, itemB) =>
      sortByLatest(itemA.release_date, itemB.release_date, "latest"),
    );
  }
  const featured = getGamesList[0];
  if (!featured) {
    return null;
  }
  return (
    <>
      <header className="border-base-300 border-b px-12 py-6">
        <h2 className="text-4xl font-bold">Popular</h2>
      </header>
      <div className="bg-diagonal-lines p-12">
        <article className="card md:card-side bg-base-100 keywords overflow-clip hover:shadow-md lg:h-70">
          <img
            className="content-start-start bg-base-300 flex min-w-5/12"
            src={featured.thumbnail}
            loading="lazy"
            alt="Album"
          />

          <div className="card-body flex flex-1 gap-4">
            <header>
              <h2 className="card-title text-5xl">{featured.title}</h2>
            </header>

            <div className="flex flex-wrap gap-2">
              <span className="badge badge-soft badge-md badge-primary">
                {featured.genre}
              </span>

              <span className="badge badge-soft badge-md badge-primary">
                {featured.platform}
              </span>
            </div>

            <div className="opacity-75">
              {featured.developer === featured.publisher ? (
                <p>
                  {`Developed & Published by : `}
                  <a className="text-primary">{featured.developer}</a>
                </p>
              ) : (
                <>
                  <p>
                    {`Developed by : `}
                    <a className="text-primary">{featured.developer}</a>
                  </p>
                  <p>
                    {`Published by : `}
                    <a className="text-primary">{featured.publisher}</a>
                  </p>
                </>
              )}
            </div>

            <p className="text-xl opacity-75">{featured.short_description}</p>
          </div>
        </article>
      </div>
    </>
  );
}
