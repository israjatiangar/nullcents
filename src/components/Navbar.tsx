import { Link, useNavigate } from "react-router";

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
          <a href="/" className="btn btn-soft btn-primary text-xl">
            <span>Nullcents</span>
          </a>
        </span>
        <span className="hidden flex-none md:block">
          <menu className="flex list-none">
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
        </span>
      </nav>
    </header>
  );
}
