import { ThemeProvider } from "styled-components";
import { light } from "./styles/Themes";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
