import { useContext } from "react";
import { ProportionsContext } from "../contexts/proportions.context";

export const Lock = () => {
  const proportionsContext = useContext(ProportionsContext);
  const { setLock } = proportionsContext!;

  return (
    <div>
      <button onClick={() => setLock(true)}>Lock</button>
      <button onClick={() => setLock(false)}>Unlock</button>
    </div>
  );
};
