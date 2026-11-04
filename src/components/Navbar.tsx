export default function Navbar() {
  return (
    <header className="border-base-300 sticky top-0 z-10 w-dvw border-b">
      <nav className="[&_a]:border-base-300 [&_a]:transition-color bg-base-100 mx-auto flex md:max-w-6xl [&_a]:rounded-none [&_a]:border-y-0 [&_a]:duration-500 [&_a]:ease-in-out">
        <span className="flex-1">
          <a className="btn btn-soft btn-primary text-xl">Nullcents</a>
        </span>
        <span className="hidden flex-none md:block">
          <menu className="[&_a]:btn-ghost [&_a]:btn-default [&_a]:btn flex list-none">
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
            <li>
              <a>Sign In</a>
            </li>
          </menu>
        </span>
      </nav>
    </header>
  );
}
