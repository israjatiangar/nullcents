export default function FreeToGamesCard({ card }: { card: typFreeToGames }) {
  return (
    card && (
      <div className="card sm:card-side bg-base-200 hover:outline-primary overflow-clip outline-1 duration-200 hover:outline-2 hover:[&_img]:scale-105">
        <figure className="h-fit max-w-full overflow-clip sm:aspect-square md:w-1/2">
          <img
            className="w-full duration-300 sm:w-auto"
            src={card.thumbnail}
            alt="Movie"
            loading="lazy"
          />
        </figure>
        <div className="card-body">
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
      </div>
    )
  );
}
