import "./App.css";
import { Content } from "./components/Content";
import { FontButtons } from "./components/FontButtons";
import { LineHeightMultiplier } from "./components/LineHeightMultiplier";
import { Lock } from "./components/Lock";
import { TextFieldWidth } from "./components/TextFieldWidth";
import { ProportionsProvider } from "./contexts/proportions.context";

function App() {
  return (
    <ProportionsProvider>
      <Content />
      <div style={{ display: "flex", alignItems: "center" }}>
        FontSizes: <FontButtons />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        Lock: <Lock />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        LineHeightMultiplier: <LineHeightMultiplier />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        TextFieldWidth: <TextFieldWidth />
      </div>
    </ProportionsProvider>
  );
}

export default App;
