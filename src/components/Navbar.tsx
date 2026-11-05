export default function Navbar() {
  // #region Links
  const navLinks = [
    { name: "Browse Games", link: "#Browse" },
    { name: "New Releases", link: "#New_Releases" },
    { name: "Give Aways", link: "#Give_Aways" },
  ];
  // #endregion
  return (
    <header className="border-base-300 sticky top-0 z-10 w-dvw border-b">
      <nav className="bg-base-100 mx-auto flex md:max-w-6xl">
        <span className="flex-1">
          <a
            href="/"
            className="btn btn-soft btn-primary border-x-base-300 rounded-none border-x text-xl"
          >
            <span>Nullcents</span>
          </a>
        </span>
        <span className="hidden flex-none md:block">
          <menu className="flex list-none">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="btn-ghost btn focus border-x-base-300 rounded-none border"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li>
              <button className="btn btn-soft btn-accent border-x-base-300 rounded-none border">
                Sign In
              </button>
            </li>
          </menu>
        </span>
      </nav>
    </header>
  );
}
