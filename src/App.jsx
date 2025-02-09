import { useState } from "react";
import "./App.css";
import Details from "./pages/Details";
import DarkLight from "./reusable/DarkLight";
import Hero from "./pages/Hero";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark);

  const switchTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="body-wrapper" data-theme={theme ? 'dark' : 'light'} >
      <DarkLight theme={theme} onClick={() => switchTheme()} />
        <Hero />
      <Details />
    </div>
  );
}

export default App;
