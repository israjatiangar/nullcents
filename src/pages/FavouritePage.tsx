import { useContext } from "react";
import Section from "../components/Section";
import { FavouriteContext } from "../contexts/FavouriteContext";
import { GamesListContext } from "../contexts/GamesListContext";
import GamerPowerCard from "../components/GamerPowerCard/GamerPowerCard";

export default function FavouritePage() {
  const { favouriteList } = useContext(FavouriteContext);
  const { gamerPowerList } = useContext(GamesListContext);
  const favouriteGames = gamerPowerList.filter((game) =>
    favouriteList.includes(game.id),
  );
  return (
    favouriteGames.length !== 0 && (
      <Section>
        <div className="grid grid-cols-3 gap-6">
          {favouriteGames.map((favGame) => (
            <GamerPowerCard game={favGame} />
          ))}
        </div>
      </Section>
    )
  );
}
