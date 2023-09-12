// Import definations
import React from "react";
import { IAppPropsTypes } from "./types/app.types";
import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

/**
 * Main App Component to combine all the other
 * utility components.
 * @returns Bundled App Component.
 */
const App: React.FC<IAppPropsTypes> = () => {
  return (
    <main className="app trasistion-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;
