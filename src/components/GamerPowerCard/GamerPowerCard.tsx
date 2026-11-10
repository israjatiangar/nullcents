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
    <article className="card relative w-96 justify-items-stretch shadow-sm hover:[&_img]:scale-105">
      <figure className="rounded-selector relative object-cover">
        <img
          className="w-full object-cover duration-300"
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
          {`Offer ends on ${getLocaleDateString(game.end_date)} at ${getLocaleTimeString(game.end_date)}`}
          <br />
          <span className="text-xs">
            Already Claimed by
            <span className="text-primary"> {game.users}+ </span>
            people
          </span>
        </p>
      </div>

      <BookmarkButton id={game.id} isBookmarked={isBookmarked} />
    </article>
  );
}
