import { Link } from "react-router";
import Section from "../components/Section";

export default function Error404Page() {
  return (
    <>
      <title>Page Not Found | Nullcents</title>
      <Section className="min-h-dvh">
        <div className="mockup-browser bg-base-100 border-base-300 h-full w-full border">
          <div className="mockup-browser-toolbar">
            <div className="input text-error text-center">Error 404</div>
          </div>
          <div className="grid h-80 place-content-center place-items-center space-y-4">
            <h1 className="text-center text-4xl">
              The Page you are trying to access was not found.
            </h1>
            <Link to="/" className="btn btn-primary w-fit">
              Go Home
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
