import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import WeatherSearch from "./Weather";

import "./weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Emelie's Weather App</h1>

      <WeatherSearch />
    </div>
  </StrictMode>
);
