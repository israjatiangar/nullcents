import {
  getLocaleDateString,
  getLocaleTimeString,
} from "../../utilities/DateAndTimeHelper";

/** Return Daisy UI Cards with type typGamerPower  */
export default function GamerPowerCard({ game }: { game: typGamerPower }) {
  return (
    <article className="card bg-base-100 w-96 shadow-sm">
      <figure className="relative h-6/12">
        <img className="" src={game.image} alt="Shoes" loading="lazy" />
      </figure>
      <div className="card-body">
        <div>
          <span className="badge badge-soft">
            <del className="opacity-75">{game.worth}</del>
          </span>
          <span className="badge badge-soft badge-primary">
            <del>{game.worth}</del>
          </span>
        </div>
        {`Offer ends on ${getLocaleDateString(game.end_date)} at ${getLocaleTimeString(game.end_date)}`}
        <h2 className="card-title w-full truncate text-left text-ellipsis whitespace-nowrap">
          {game.title}
        </h2>
        <p>{game.description}</p>
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
    </article>
  );
}
