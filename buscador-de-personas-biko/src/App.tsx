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
      <div className="">
        <header className=""></header>
        <body className="">
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
