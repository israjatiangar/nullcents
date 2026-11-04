import { useContext } from "react";
import { GamesListContext } from "../contexts/GamesListContext";
import { sortByLatest } from "../utilities/DateAndTimeHelper";

export default function HeroBanner() {
  let getGamesList: Array<typFreeToGames> = useContext(GamesListContext);
  if (getGamesList) {
    getGamesList = getGamesList.sort((itemA, itemB) =>
      sortByLatest(itemA.release_date, itemB.release_date, "latest"),
    );
  }
  const featured: typFreeToGames = getGamesList[0];
  if (!featured) {
    return null;
  }
  return (
    <section className="bg-base-200 border-base-300 flex flex-col border-b bg-repeat contain-content">
      <header className="border-base-300 border-b px-12 py-6">
        <h1 className="text-4xl font-bold">Popular</h1>
      </header>
      <div
        className="p-12"
        style={{
          background: `url("data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M%200%2020%20L%2020%200%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.2%22%20%2F%3E%3C%2Fsvg%3E")`,
        }}
      >
        <div className="card md:card-side bg-base-100 overflow-clip hover:shadow-md lg:h-70">
          <img
            className="content-start-start flex"
            src={featured.thumbnail}
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
        </div>
      </div>
    </section>
  );
}
