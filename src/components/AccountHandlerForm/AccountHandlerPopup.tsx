import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export type typAccountState = "signUp" | "logIn";

export default function AccountHandlerPopup({ id }: { id: string }) {
  const [accState, setAccState] = useState<typAccountState>("signUp");
  return (
    <dialog
      id={id}
      className="modal modal-bottom sm:modal-middle"
      popover="auto"
    >
      <div className="modal-box">
        <header className="mb-4">
          <h3 className="text-lg font-bold">
            {accState === "signUp" ? `Sign Up` : `Login`}
          </h3>
        </header>
        <div>
          {accState === "signUp" ? (
            <SignUpForm setAccState={setAccState} />
          ) : (
            <LoginForm setAccState={setAccState} />
          )}
        </div>
        <footer className="modal-action flex *:flex-1">
          <button
            className="btn btn-primary"
            /*@ts-ignore*/
            command="hide-popover"
            commandfor={id}
          >
            {accState === "signUp" ? "Sign Up" : "Login"}
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
