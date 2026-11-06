import { useContext } from "react";
import { sortByDate } from "../../utilities/DateAndTimeHelper";
import { GamesListContext } from "../../contexts/GamesListContext";

export default function HeroBanner() {
  let { freeToGamesList } = useContext(GamesListContext);
  if (freeToGamesList) {
    freeToGamesList = freeToGamesList.sort((itemA, itemB) =>
      sortByDate(itemA.release_date, itemB.release_date, "Ascending"),
    );
  }
  const featured = freeToGamesList[0];

  //simplify
  return !featured ? null : (
    <div className="bg-diagonal-lines p-12">
      <article className="card md:card-side bg-base-100 keywords overflow-clip hover:shadow-md">
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
            <span className="badge badge-sm badge-soft badge-primary">
              {featured.genre}
            </span>

            <span className="badge badge-sm badge-soft badge-primary">
              {featured.platform}
            </span>
          </div>

          <div className="opacity-75 *:text-xs">
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

          <p className="opacity-75">{featured.short_description}</p>
          <footer className="flex gap-4">
            <a
              className="btn btn-sm btn-soft btn-primary"
              href={featured.game_url}
            >
              View Website
            </a>
            <a
              className="btn btn-sm btn-soft btn-accent"
              href={featured.freetogame_profile_url}
            >
              View FTG Profile
            </a>
          </footer>
        </div>
      </article>
    </div>
  );
}
