import {
  GithubLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const links = [
  { name: "daisyUI", url: "https://daisyui.com/" },
  { name: "Free To Game", url: "https://www.freetogame.com/" },
  { name: "Gamer Power", url: "https://www.gamerpower.com/" },
];
export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        {links.map((link, index) => {
          return (
            <a className="link link-hover" href={link.url} key={index}>
              {link.name}
            </a>
          );
        })}
      </nav>
      <nav>
        <div className="[&_a]:hover:text-primary grid grid-flow-col gap-6 [&_a]:transition">
          <a
            aria-label="Github"
            href="https://github.com/israjatiangar/nullcents"
          >
            <GithubLogoIcon size={24} weight="duotone" />
          </a>
          <a aria-label="Website" href="https://israjatiangar.github.io/">
            <GlobeIcon size={24} weight="duotone" />
          </a>
          <a
            araia-label="Linkedin"
            href="https://www.linkedin.com/in/israjatiangar/"
          >
            <LinkedinLogoIcon size={24} weight="duotone" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2026 NullCents</p>
      </aside>
    </footer>
  );
}
