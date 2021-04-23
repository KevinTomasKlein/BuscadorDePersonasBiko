import React from "react";
import logo from "./logo.svg";
import logoBiko from "./logoBiko.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { HomeView } from "./views/HomeView";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <picture>
          <source srcSet={logoBiko} type="image/svg+xml" />
          <img
            src={logoBiko}
            className="img-thumbnail rounded float-start"
            alt="logo"
            style={{ width: 200, height: 200 }}
          />
        </picture>
      </header>
      <body>
        <div>
          <HomeView />
        </div>
      </body>
    </div>
  );
}

export default App;
