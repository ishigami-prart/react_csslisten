import { InlineStyle } from "./component/inlineStyle";
import { CssModules } from "./component/CssModules";
import { StyledJsx } from "./component/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
