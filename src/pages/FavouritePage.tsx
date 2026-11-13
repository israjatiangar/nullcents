import { useContext } from "react";
import Section from "../components/Section";
import { FavouriteContext } from "../contexts/FavouriteContext";
import { GamesListContext } from "../contexts/GamesListContext";
import GamerPowerCard from "../components/GamerPowerCard/GamerPowerCard";
import { Link } from "react-router";
import { HeartBreakIcon } from "@phosphor-icons/react";

export default function FavouritePage() {
  const { favouriteList } = useContext(FavouriteContext);
  const { gamerPowerList } = useContext(GamesListContext);
  const favouriteGames = gamerPowerList.filter((game) =>
    favouriteList.includes(game.id),
  );
  return (
    <>
      <title>NullCents | Favourites</title>
      <Section>
        <header className="p-4">
          <h2 className="text-4xl font-bold">Your Favourites</h2>
        </header>
        {favouriteGames.length !== 0 ? (
          <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {favouriteGames.map((favGame) => (
              <GamerPowerCard game={favGame} />
            ))}
          </div>
        ) : (
          <div className="border-primary rounded-box flex h-52 w-full flex-col place-content-center place-items-center gap-4 border border-dashed">
            <div className="flex flex-col place-content-center place-items-center">
              <HeartBreakIcon size={32} />
              <h3 className="text-center text-balance">
                You currently have no Favourite Games{" "}
              </h3>
            </div>
            <Link className="btn btn-primary btn-soft w-fit" to={"/"}>
              {" "}
              Browse Some Games
            </Link>
          </div>
        )}
      </Section>
    </>
  );
}
