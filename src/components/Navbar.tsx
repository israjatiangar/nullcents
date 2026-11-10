export default function Navbar() {
  // #region Links
  const navLinks = [
    { name: "Browse Games", link: "#Browse" },
    { name: "New Releases", link: "#New_Releases" },
    { name: "Give Aways", link: "#Give_Aways" },
  ];
  // #endregion
  return (
    <header className="w-dvw">
      <nav className="navbar bg-base-100 flex">
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
                  <a className="btn-ghost btn" href={item.link}>
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
