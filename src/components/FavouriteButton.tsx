import { useContext } from "react";
import { FavouriteContext } from "../contexts/FavouriteContext";
import { HeartIcon } from "@phosphor-icons/react";
import { HeartBreakIcon } from "@phosphor-icons/react/dist/ssr";

export default function FavouriteButton({
  apiName,
  GameId,
  className = "",
}: {
  apiName: typApiName;
  GameId: number;
  className?: string;
}) {
  const { favouriteList, toggleFavourite } = useContext(FavouriteContext);
  const isFavourite =
    favouriteList.has(apiName) && favouriteList.get(apiName)?.includes(GameId);
  return (
    <button
      className={`btn btn-soft btn-accent btn-square transition active:scale-110 ${className} ${isFavourite && "btn-active"} ${isFavourite && `hover:[&_.heart-icon]:hidden hover:[&_.heartbreak-icon]:inline-block`}`}
      onClick={() => toggleFavourite(apiName, GameId)}
    >
      <HeartIcon
        className="heart-icon inline-block"
        weight={isFavourite ? `fill` : `duotone`}
        size={24}
      />
      <HeartBreakIcon
        className="heartbreak-icon hidden"
        weight="fill"
        size={24}
      />
    </button>
  );
}
