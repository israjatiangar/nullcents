import {
  getLocaleDateString,
  getLocaleTimeString,
} from "../../utilities/DateAndTimeHelper";
import BookmarkButton from "../BookmarkButton";

/** Return Daisy UI Cards with type typGamerPower  */
export default function GamerPowerCard({
  game,
  isBookmarked,
}: {
  game: typGamerPower;
  isBookmarked: boolean;
}) {
  return (
    <article className="card bg-base-100 relative w-96 justify-items-stretch shadow-sm hover:[&_.hover-view]:flex">
      <figure className="relative min-h-52">
        <img
          className="h-full object-cover"
          src={game.image}
          alt="Shoes"
          loading="lazy"
        />
      </figure>
      <div className="card-body gap-4">
        <div className="join join-horizontal">
          <span className="badge join-item badge-soft">
            <del className="opacity-75">{game.worth}</del>
          </span>
          <span className="badge join-item badge-primary">Free!!</span>
        </div>
        <p>
          {`Offer ends on ${getLocaleDateString(game.end_date)} at ${getLocaleTimeString(game.end_date)}`}
        </p>
        <h2 className="card-title truncate text-left text-ellipsis whitespace-nowrap">
          {game.title}
        </h2>
        <p>
          Already Claimed by
          <span className="text-primary"> {game.users}+ </span>
          people
        </p>
        <div className="card-actions">
          <a className="btn btn-accent" href={game.open_giveaway_url}>
            Claim it here
          </a>
          <a className="btn btn-soft btn-primary" href={game.gamerpower_url}>
            Learn More at GamePower
          </a>
        </div>
      </div>
      <BookmarkButton id={game.id} isBookmarked={isBookmarked} />
    </article>
  );
}
