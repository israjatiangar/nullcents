import { useContext } from "react";
import { GamesListContext } from "../contexts/GamesListContext";

export default function FreeToGamesCard({ count }) {
  const { freeToGamesList } = useContext(GamesListContext);
  let Card = freeToGamesList[count];
  return (
    Card && (
      <div className="card sm:card-side bg-base-200 hover:outline-primary overflow-clip outline-1 duration-200 hover:outline-2 hover:[&_img]:scale-105">
        <figure className="min-w-1/2">
          <img
            className="aspect-auto w-full object-cover duration-300"
            src={Card.thumbnail}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-1">{Card.title}</h2>
          <p className="space-y-2 text-xs text-pretty">
            <span className="badge badge-sm badge-primary badge-soft">
              {Card.platform}
            </span>
            <br />
            {Card.publisher === Card.developer ? (
              <span>
                Developed And Published by{" "}
                <strong className="text-primary">{Card.publisher}</strong>
              </span>
            ) : (
              <>
                <span>
                  Published by{" "}
                  <strong className="text-primary">{Card.publisher}</strong>
                </span>
                <br />
                <span>
                  Developed by{" "}
                  <strong className="text-primary">{Card.developer}</strong>
                </span>
              </>
            )}
          </p>
          <p className="line-clamp-4 text-pretty">{Card.short_description}</p>
          <div className="card-actions sm:justify-end">
            <a className="btn btn-primary" href={Card.game_url} target="_blank">
              See Game
            </a>
            <a
              className="btn btn-soft"
              href={Card.freetogame_profile_url}
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
