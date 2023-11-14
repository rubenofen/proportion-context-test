import { useContext } from "react";
import { ProportionsContext } from "../contexts/proportions.context";

export const FontButtons = () => {
  const proportionsContext = useContext(ProportionsContext);
  const { setFontSize } = proportionsContext!;

  return (
    <div>
      <button onClick={() => setFontSize(16)}>16</button>
      <button onClick={() => setFontSize(18)}>18</button>
      <button onClick={() => setFontSize(20)}>20</button>
      <button onClick={() => setFontSize(20)}>20</button>
      <button onClick={() => setFontSize(22)}>22</button>
      <button onClick={() => setFontSize(24)}>24</button>
      <button onClick={() => setFontSize(26)}>26</button>
    </div>
  );
};
