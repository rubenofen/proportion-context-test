import { useContext } from "react";
import { ProportionsContext } from "../contexts/proportions.context";

export const TextFieldWidth = () => {
  const proportionsContext = useContext(ProportionsContext);
  const { setTextFieldWidth } = proportionsContext!;

  return (
    <div>
      <button onClick={() => setTextFieldWidth(450)}>450</button>
      <button onClick={() => setTextFieldWidth(350)}>350</button>
      <button onClick={() => setTextFieldWidth(250)}>250</button>
    </div>
  );
};
