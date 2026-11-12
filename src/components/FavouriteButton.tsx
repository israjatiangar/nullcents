import { useContext } from "react";
import { FavouriteContext } from "../contexts/FavouriteContext";
import { HeartIcon } from "@phosphor-icons/react";

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
      className={`btn btn-soft btn-accent btn-square transition active:scale-110 ${className} ${isFavourite && "btn-active"}`}
      onClick={() => {
        console.log(favouriteList);
        return toggleFavourite(id);
      }}
    >
      <HeartIcon weight={isFavourite ? `fill` : `duotone`} fontSize={24} />
    </button>
  );
}
