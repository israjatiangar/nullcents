import FavouriteButton from "../FavouriteButton";

const API_NAME = "FTG"; //FTG = FreeToGame

export default function FreeToGamesCard({ card }: { card: typFreeToGames }) {
  return (
    card && (
      <article className="card sm:card-side bg-base-200 hover:outline-primary max-h-auto relative overflow-clip outline-1 duration-200 hover:outline-2 hover:[&_img]:scale-105">
        <figure className="flex-1 overflow-clip md:aspect-square">
          <img
            className="h-full w-full object-cover duration-300"
            src={card.thumbnail}
            alt="Movie"
            loading="lazy"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title line-clamp-1">{card.title}</h2>
          <p className="space-y-2 text-xs text-pretty">
            {card.platform.split(",").map((item, index) => (
              <>
                <span
                  className="badge badge-sm badge-primary badge-soft"
                  key={index}
                >
                  {item}
                </span>
                &nbsp;
              </>
            ))}
            <br />
            {card.publisher === card.developer ? (
              <span>
                Developed And Published by{" "}
                <strong className="text-primary">{card.publisher}</strong>
              </span>
            ) : (
              <>
                <span>
                  Published by{" "}
                  <strong className="text-primary">{card.publisher}</strong>
                </span>
                <br />
                <span>
                  Developed by{" "}
                  <strong className="text-primary">{card.developer}</strong>
                </span>
              </>
            )}
          </p>
          <p className="line-clamp-4 text-pretty">{card.short_description}</p>
          <div className="card-actions sm:justify-end">
            <a className="btn btn-primary" href={card.game_url} target="_blank">
              See Game
            </a>
            <a
              className="btn btn-soft"
              href={card.freetogame_profile_url}
              target="_blank"
            >
              View More
            </a>
          </div>
        </div>
        <FavouriteButton
          className="absolute top-2 left-2"
          apiName={API_NAME}
          GameId={card.id}
        />
      </article>
    )
  );
}
