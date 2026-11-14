import { useContext } from "react";
import Section from "../components/Section";
import { FavouriteContext } from "../contexts/FavouriteContext";
import { GamesListContext } from "../contexts/GamesListContext";
import GamerPowerCard from "../components/GamerPowerCard/GamerPowerCard";
import { Link } from "react-router";
import { HeartBreakIcon } from "@phosphor-icons/react";
import FreeToGamesCard from "../components/FreeToGamesCard/FreeToGamesCard";

const GAMER_POWER = "GP";
const FREE_TO_GAME = "FTG";

export default function FavouritePage() {
  const { favouriteList } = useContext(FavouriteContext);
  const { gamerPowerList, freeToGamesList } = useContext(GamesListContext);
  const favouriteGamePower = gamerPowerList.filter((game) =>
    favouriteList.get(GAMER_POWER)?.includes(game.id),
  );
  const favouriteFreeToGame = freeToGamesList.filter((game) =>
    favouriteList.get(FREE_TO_GAME)?.includes(game.id),
  );
  return (
    <>
      <title>NullCents | Favourites</title>
      <header className="p-4">
        <h2 className="text-4xl font-bold">Your Favourites</h2>
      </header>

      <Section className="bg-base-200 rounded-field space-y-4 py-2">
        <header className="p-4">
          <h2 className="text-2xl font-bold text-balance">From Gamer Power</h2>
        </header>
        {favouriteGamePower.length !== 0 ? (
          <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {favouriteGamePower.map((favGame) => (
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
      <Section>
        <header className="p-4">
          <h2 className="text-2xl font-bold">From FreeToGames</h2>
        </header>
        {favouriteFreeToGame.length !== 0 ? (
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
            {favouriteFreeToGame.map((favGame) => (
              <FreeToGamesCard card={favGame} />
            ))}
          </div>
        ) : (
          <div className="border-primary rounded-box flex h-52 w-full flex-col place-content-center place-items-center gap-4 border border-dashed">
            <div className="flex flex-col place-items-center">
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
