/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useLocalObservable } from "mobx-react-lite";

export default function MyComponent(props) {
  const state = useLocalObservable(() => ({ name: "Alex" }));

  return (
    <div>
      <input
        css={{
          color: "red",
        }}
        value={state.name}
        onChange={(event) => (state.name = event.target.value)}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}

