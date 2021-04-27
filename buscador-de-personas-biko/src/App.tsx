import React from "react";
import logo from "./logo.svg";
import logoBiko from "./logoBiko.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomeView from "./views/HomeView";
import "./styles/layoutHomeView.css";
import "./styles/layoutDetailsView.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { DetailsView } from "./views/DetailsView";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <header>
          <picture>
            <source srcSet={logoBiko} type="image/svg+xml" />
            <a href="/">
              <img src={logoBiko} className="logo" alt="logo" />{" "}
            </a>
          </picture>
        </header>
        <body>
          <div>
            <Switch>
              <Route path="/Employe/:Id:Nombre" component={DetailsView} />

              <Route path="/DetailsView" component={DetailsView} />

              <Route path="/" exact component={HomeView} />
            </Switch>
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
