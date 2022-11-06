import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./Weather";
import Footer from "./footer";

import "./weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <Footer />
    </div>
  </StrictMode>
);
