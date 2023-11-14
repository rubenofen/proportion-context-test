import { useContext } from "react";
import { ProportionsContext } from "../contexts/proportions.context";

export const Content = () => {
  const proportionsContext = useContext(ProportionsContext);
  if (!proportionsContext) {
    return null;
  }
  return Object.keys(proportionsContext)
    .filter((key) => !key.startsWith("set"))
    .map((key) => (
      <div key={key}>
        {key}:{" "}
        {proportionsContext[key as keyof typeof proportionsContext].toString()}
      </div>
    ));
};
