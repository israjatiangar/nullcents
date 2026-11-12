import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router";

export default function Navbar() {
  // #region Links
  const navLinks = [
    { name: "Featured", path: "/", hash: "#Featured" },
    { name: "Give Aways", path: "/", hash: "#Give_Aways" },
    { name: "All Games", path: "/", hash: "#All_Games" },
    { name: "My Favourites", path: "favourites", hash: "" },
  ];
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
            <span>Nullcents</span>
          </a>
        </span>
        <span className="flex flex-none">
          <menu className="hidden list-none md:flex">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="btn-ghost btn"
                    href={item.hash !== "" && item.hash}
                    onClick={() => navigateTo(item.path)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li>
              <button className="btn btn-soft btn-accent">Sign In</button>
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

            <menu
              className="dropdown menu rounded-box dropdown-end sm:menu-lg mt-2 w-52 bg-neutral-800 shadow-sm"
              popover="auto"
              id="navMenu"
              style={{ positionAnchor: "navMenu" }}
            >
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="btn-ghost btn"
                      href={item.hash !== "" && item.hash}
                      onClick={() => navigateTo(item.path)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li>
                <button className="btn btn-soft btn-accent">Sign In</button>
              </li>
            </menu>
          </div>
        </span>
      </nav>
    </header>
  );
}
