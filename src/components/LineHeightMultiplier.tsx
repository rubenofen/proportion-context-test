import { useContext } from "react";
import { ProportionsContext } from "../contexts/proportions.context";

export const LineHeightMultiplier = () => {
  const proportionsContext = useContext(ProportionsContext);
  const { setLineHeightMultiplier } = proportionsContext!;

  return (
    <div>
      <button onClick={() => setLineHeightMultiplier(2)}>2</button>
      <button onClick={() => setLineHeightMultiplier(3)}>3</button>
    </div>
  );
};
