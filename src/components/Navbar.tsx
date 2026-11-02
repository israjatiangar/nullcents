export default function Navbar() {
  return (
    <header className="border-base-300 border-b px-12">
      <nav className="[&_a]:border-base-300 [&_a]:transition-color flex [&_a]:border-y-0 [&_a]:duration-500 [&_a]:ease-in-out">
        <span className="flex-1">
          <a className="btn btn-soft btn-primary text-xl">Nullcents</a>
        </span>
        <span className="flex-none">
          <menu className="[&_a]:btn-ghost [&_a]:btn-secondary [&_a]:btn flex list-none">
            <li>
              <a>Browse Games</a>
            </li>
            <li>
              <a>New Releases</a>
            </li>
            <li>
              <a>Give Aways</a>
            </li>
            <li>
              <a>Ending Soon</a>
            </li>
          </menu>
        </span>
      </nav>
    </header>
  );
}
