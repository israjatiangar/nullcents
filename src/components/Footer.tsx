import {
  GithubLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a aria-label="Github">
            <GithubLogoIcon size={24} />
          </a>
          <a aria-label="Website">
            <GlobeIcon size={24} />
          </a>
          <a araia-label="Linkedin">
            <LinkedinLogoIcon size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2026 NullCents</p>
      </aside>
    </footer>
  );
}
