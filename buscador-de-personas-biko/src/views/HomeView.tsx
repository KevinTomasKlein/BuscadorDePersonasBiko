import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import logoBiko from "../images/logoBiko.png";
import { SearchOutlined } from "@ant-design/icons";
import { useLocation } from "wouter";
import getBikoData from "../services/getBikoData";
import ListOfEmployes from "../components/ListOfEmployes";
function HomeView() {
  const [datosBiko, setDatosBiko] = useState<any[]>([]);
  const [searchWord, setSearchword] = useState("");
  const [path, pushLocation] = useLocation();
  const employes: any[] = [];

  useEffect(() => {
    getBikoData().then((employes: any) => setDatosBiko(employes));
  }, [path]);

  function printEmployes() {
    datosBiko.forEach((employe) => {
      let info =
        employe.Nombre.toString().toLowerCase() +
        " " +
        employe.Apellidos.toString().toLowerCase();
      if (info.includes(searchWord.toLowerCase().trim())) {
        employes.push(employe);
      }
    });

    if (employes.length === 0 && searchWord !== "") {
      return <p className="input-error">¡¡¡¡Ese Bikoniano no existe!!!!</p>;
    }

    return <ListOfEmployes employes={employes} datosBiko={datosBiko} />;
  }

  function getSearchedData(event: any) {
    event.preventDefault();
    setSearchword(event.target.elements.searchBox.value);
    pushLocation(`/${searchWord}`);
  }

  return (
    <div className="container-big">
      <div className="container-big">
        <div>
          <picture>
            <source srcSet={logoBiko} type="png" />
            <a href="/">
              <img src={logoBiko} className="logo" alt="logo" />
            </a>
          </picture>
          <div className="header-auto-layout">
            <div className="header-text-container">
              <h1 className="header-title">
                Busca <b>Bikonianos</b>
              </h1>
              <p className="red-text-2">(lorem ipsum dolor set)</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="item">
          <p className="inside-header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            pretium tellus.
          </p>
        </div>

        <div>
          <form onSubmit={(event) => getSearchedData(event)}>
            <div>
              <input
                type="search"
                placeholder="Nombre bikoniano"
                className="input input-text"
                id="searchBox"
              ></input>
              <span>
                <button className="btn-container" type="submit">
                  {
                    <SearchOutlined
                      style={{ color: "white", fontSize: "25px" }}
                    />
                  }
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="grid">
        <div className="grid-row">{printEmployes()}</div>
      </div>
    </div>
  );
}
export default HomeView;
