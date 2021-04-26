import React from "react";
import logo from "./logo.svg";
import logoBiko from "./logoBiko.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomeView from "./views/HomeView";
import "./styles/layoutHomeView.css";

function App() {
  return (
    <div className="">
      <header>
        <picture>
          <source srcSet={logoBiko} type="image/svg+xml" />
          <img src={logoBiko} className="logo" alt="logo" />
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
