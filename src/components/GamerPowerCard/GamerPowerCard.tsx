import { getLocaleDateString } from "../../utilities/DateAndTimeHelper";
import FavouriteButton from "../FavouriteButton";

const API_NAME = "GP"; //GP = GamerPower
/** Return Daisy UI Cards with type typGamerPower  */
export default function GamerPowerCard({ game }: { game: typGamerPower }) {
  return (
    <article className="card relative w-full max-w-sm shadow-sm hover:[&_img]:scale-105">
      <figure className="rounded-selector h-full w-full">
        <img
          className="h-full w-full object-cover duration-300"
          src={game.thumbnail}
          alt="Shoes"
          loading="lazy"
        />
      </figure>

      <div className="card-body gap-4">
        <h2 className="card-title line-clamp-1 text-xl">{game.title}</h2>
        <span className="flex gap-2">
          <span className="badge badge-dash badge-primary">Free!!</span>
          {game.worth !== "N/A" && (
            <del className="text-neutral-600">{game.worth}</del>
          )}
        </span>
        <p>
          {game.end_date !== "N/A" ? (
            <span>
              Offer ends on&nbsp;
              <strong className="text-primary">
                {getLocaleDateString(game.end_date)}
              </strong>
            </span>
          ) : (
            <span className="text-warning">End Date Unavailable </span>
          )}
          <br />
          <span className="text-xs">
            Already Claimed by
            <span className="text-primary"> {game.users}+ </span>
            people
          </span>
        </p>
      </div>
      <div className="card-actions">
        <a className="btn btn-soft btn-primary" href={game.open_giveaway_url}>
          Claim Offer
        </a>
        <a className="btn btn-soft btn-neutral" href={game.gamerpower_url}>
          Learn More
        </a>
      </div>

      <FavouriteButton
        className={"absolute top-2 right-2"}
        apiName={API_NAME}
        GameId={game.id}
      />
    </article>
  );
}
