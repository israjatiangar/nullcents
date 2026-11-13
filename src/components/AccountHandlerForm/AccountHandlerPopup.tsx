import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function AccountHandlerPopup({ id }: { id: string }) {
  const [SignedUp, setSignedUp] = useState(false);
  return (
    <dialog
      id={id}
      className="modal modal-bottom sm:modal-middle"
      popover="auto"
    >
      <div className="modal-box">
        <header className="mb-4">
          <h3 className="text-lg font-bold">
            {SignedUp ? `Sign In` : `Sign Up`}
          </h3>
        </header>
        <div>{SignedUp ? <SignUpForm /> : <LoginForm />}</div>
        <footer className="modal-action flex *:flex-1">
          <button
            onClick={() => setSignedUp((prev) => !prev)}
            className="btn btn-primary"
            /*@ts-ignore*/
            command="hide-popover"
            commandfor={id}
          >
            Sign In
          </button>
          <button
            className="btn btn-soft"
            /*@ts-ignore*/
            command="hide-popover"
            commandfor={id}
          >
            Close
          </button>
        </footer>
      </div>
    </dialog>
  );
}
