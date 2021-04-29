import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomeView from "./views/HomeView";
import "./styles/layoutHomeView.css";
import "./styles/layoutDetailsView.css";
import { Route, BrowserRouter, Switch, Router } from "react-router-dom";
import { DetailsView } from "./views/DetailsView";
import logoBiko from "./images/logoBiko.png";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <header>
          <picture>
            <source srcSet={logoBiko} type="png" />
            <a href="/">
              <img src={logoBiko} className="logo" alt="logo" />{" "}
            </a>
          </picture>
        </header>
        <body>
          <div>
            <Switch>
              <Route path="/Employe/:Nombre" component={DetailsView} />

              <Route path="/" exact component={HomeView} />
            </Switch>
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
