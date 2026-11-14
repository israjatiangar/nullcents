import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { lazy } from "react";
import { useNavigate } from "react-router";
const AccountHandlerPopup = lazy(
  () => import("./AccountHandlerForm/AccountHandlerPopup"),
);

export default function Navbar() {
  // #region Links
  const navLinks = [
    { name: "Featured", path: "/", hash: "#Featured" },
    { name: "Give Aways", path: "/", hash: "#Give_Aways" },
    { name: "All Games", path: "/", hash: "#All_Games" },
    { name: "My Favourites", path: "favourites", hash: "" },
  ];

  function makeNavLinks() {
    return navLinks.map((item, index) => {
      return item.hash === "" ? (
        <li key={index}>
          <a className="btn-ghost btn" onClick={() => navigateTo(item.path)}>
            {item.name}
          </a>
        </li>
      ) : (
        <li key={index}>
          <a
            className="btn-ghost btn"
            href={item.hash}
            onClick={() => navigateTo(item.path)}
          >
            {item.name}
          </a>
        </li>
      );
    });
  }

  // #endregion

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
          <menu className="hidden list-none md:flex">
            {makeNavLinks()}
            <li>
              <button
                className="btn btn-soft btn-accent"
                //@ts-ignore
                command="toggle-popover"
                commandFor="Account_Handler_Form"
              >
                Sign In
              </button>
            </li>
          </menu>
          <div>
            <button
              className="btn md:hidden"
              popoverTarget="navMenu"
              style={{ anchorName: "navMenu" }}
            >
              <ListIcon size={"1rem"} />
            </button>
            <div
              className="dropdown dropdown-end rounded-box mt-2 w-52 bg-neutral-800 shadow-sm md:hidden"
              popover="auto"
              id="navMenu"
              style={{ positionAnchor: "navMenu" }}
            >
              <menu className="menu sm:menu-lg w-full">
                {makeNavLinks()}
                <li>
                  <button
                    className="btn btn-soft btn-accent"
                    //@ts-ignore
                    command="toggle-popover"
                    commandfor="Account_Handler_Form"
                  >
                    Sign In
                  </button>
                </li>
              </menu>
            </div>
          </div>
        </span>
        <AccountHandlerPopup id={"Account_Handler_Form"} />
      </nav>
    </header>
  );
}
