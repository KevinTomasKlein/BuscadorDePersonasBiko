import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomeView from "./views/HomeView";
import "./styles/layoutHomeView.css";
import "./styles/layoutDetailsView.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { DetailsView } from "./views/DetailsView";
import logoBiko from "./images/logoBiko.png";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="landing">
        <header>
          <picture>
            <source srcSet={logoBiko} type="png" />
            <a href="/">
              <img src={logoBiko} className="logo" alt="logo" />{" "}
            </a>
          </picture>
        </header>
        <body>
          <Switch>
            <Route path="/Employe/:Nombre" component={DetailsView} />

            <Route path="/" exact component={HomeView} />
          </Switch>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
