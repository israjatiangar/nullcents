import { useContext } from "react";
import { FavouriteContext } from "../contexts/FavouriteContext";
import { HeartIcon } from "@phosphor-icons/react";
import { HeartBreakIcon } from "@phosphor-icons/react/dist/ssr";

export default function FavouriteButton({
  id,
  className = "",
}: {
  id: number;
  className: string;
}) {
  const { favouriteList, toggleFavourite } = useContext(FavouriteContext);
  const isFavourite = favouriteList.includes(id);
  return (
    <button
      className={`btn btn-soft btn-accent btn-square duration-75 active:scale-110 ${className} ${isFavourite && "btn-active"} ${isFavourite && `hover:[&_.heart-icon]:hidden hover:[&_.heartbreak-icon]:inline-block`}`}
      onClick={() => {
        console.log(favouriteList);
        return toggleFavourite(id);
      }}
    >
      <HeartIcon
        className="heart-icon inline-block"
        weight={isFavourite ? `fill` : `duotone`}
        size={24}
      />
      <HeartBreakIcon
        className="heartbreak-icon hidden"
        weight={isFavourite ? `fill` : `duotone`}
        size={24}
      />
    </button>
  );
}
