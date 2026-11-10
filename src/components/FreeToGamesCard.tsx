import { useContext } from "react";
import { GamesListContext } from "../contexts/GamesListContext";

export default function FreeToGamesCard({ count }) {
  const { freeToGamesList } = useContext(GamesListContext);
  let Card = freeToGamesList[count];
  return (
    Card && (
      <div className="card card-side bg-base-200 hover:outline-primary outline-1 duration-200 hover:outline-2 hover:[&_img]:scale-105">
        <figure className="min-w-1/2">
          <img
            className="aspect-auto w-full object-cover duration-300"
            src={Card.thumbnail}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-1">{Card.title}</h2>
          <p className="line-clamp-4">{Card.short_description}.</p>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" href={Card.game_url}>
              See Game
            </a>
          </div>
        </div>
      </div>
    )
  );
}
