import type { Dispatch, SetStateAction } from "react";
import type { typAccountState } from "./AccountHandlerPopup";

export default function LoginForm({
  setAccState,
}: {
  setAccState: Dispatch<SetStateAction<typAccountState>>;
}) {
  return (
    <form className="flex flex-col gap-6">
      <fieldset className="fieldset">
        <label className="label" htmlFor="username">
          User Name :
        </label>
        <input
          type="text"
          id="username"
          className="input w-full"
          placeholder="username"
        />
      </fieldset>
      <fieldset className="fieldset">
        <label className="label" htmlFor="password">
          Password :
        </label>
        <input
          type="password"
          id="password"
          className="input w-full"
          placeholder="password"
        />
      </fieldset>
      <p>
        Already have a Account?
        <button
          type="button"
          className="btn btn-link"
          onClick={() => setAccState("signUp")}
        >
          Login
        </button>
      </p>
      <label className="label">
        <input type="checkbox" defaultChecked className="checkbox" />
        Remember me
      </label>
    </form>
  );
}
