import {
  GameControllerIcon,
  GiftIcon,
  HeartIcon,
  HouseSimpleIcon,
  type Icon,
} from "@phosphor-icons/react";
import { lazy } from "react";
import { useNavigate, useLocation } from "react-router";
const AccountHandlerPopup = lazy(
  () => import("./AccountHandlerForm/AccountHandlerPopup"),
);

const navLinks: Array<{ name: string; path: string; icon: Icon }> = [
  { name: "Home", path: "/", icon: HouseSimpleIcon },
  { name: "Give Aways", path: "/giveaways", icon: GiftIcon },
  { name: "Free To Play", path: "/freeToPlay", icon: GameControllerIcon },
  { name: "My Favourites", path: "/favourites", icon: HeartIcon },
];

export default function Navbar() {
  function makeNavLinks() {
    return navLinks.map((item, index) => (
      <li key={index}>
        <a className="btn-ghost btn" onClick={() => navigateTo(item.path)}>
          {item.name}
        </a>
      </li>
    ));
  }

  const navigateTo = useNavigate();
  return (
    <header className="w-dvw">
      <nav className="navbar flex">
        <span className="flex-1">
          <a
            onClick={() => navigateTo("/")}
            className="btn btn-soft btn-primary text-xl"
          >
            <span className="inline-block font-mono">Null Cents</span>
          </a>
        </span>
        <span className="flex flex-none">
          <menu className="hidden list-none md:flex">{makeNavLinks()}</menu>
        </span>
        <AccountHandlerPopup id={"Account_Handler_Form"} />
        <button
          className="btn btn-soft btn-accent"
          //@ts-ignore
          command="toggle-popover"
          commandFor="Account_Handler_Form"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
}

export function NavDock() {
  const navigateTo = useNavigate();
  return (
    <div className="dock bg-base-200 transition **:transition md:hidden">
      {navLinks.map((item, index) => {
        const active = useLocation().pathname === item.path;
        return (
          <button
            aria-description={item.name}
            className={active ? "dock-active text-primary" : ""}
            key={index}
            onClick={() => {
              if (!active) navigateTo(item.path);
              else scrollTo({ top: 0 });
            }}
          >
            <item.icon
              className={active ? "-translate-y-1" : ""}
              size="24"
              weight={active ? "fill" : "duotone"}
            />
          </button>
        );
      })}
    </div>
  );
}
