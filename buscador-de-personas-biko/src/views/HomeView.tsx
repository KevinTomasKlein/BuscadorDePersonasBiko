import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import logoBiko from "../images/logoBiko.png";
import "bootstrap/dist/css/bootstrap.css";
function HomeView() {
  const [datosBiko, setDatosBiko] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState("");
  const searchedPerson: any[] = [];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("dataBiko.json");
      setDatosBiko(data);
    };
    fetchData();
  }, [searchResults]);
  function getSearchedData(event: any) {
    event.preventDefault();
    setSearchResults(event.target.elements.searchBox.value);
  }

  function printAllBikoEmployes() {
    let allBikoEmployes: any = datosBiko.map((employeData) => {
      return (
        <div className="perfil-buscador card">
          <Link
            to={{
              pathname: `/Employe/${employeData["Nombre"]} ${employeData["Apellidos"]}`,
              state: { employeData: employeData, AllEmployes: datosBiko },
            }}
          >
            <img
              alt="employe-image"
              src={employeData["ImgUrl"]}
              className="picture-grid"
            ></img>
            <div className="img_description_layer">
              <div className="img_text_container img_employe_data">
                <p className="monstserrat">{employeData["Nombre"]}</p>
                <p className="monstserrat">{employeData["Apellidos"]}</p>
                <p className="monstserrat-normal">{employeData["Rol"]}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return allBikoEmployes;
  }

  function printSearchedEmploye() {
    datosBiko.map((employe) => {
      if (
        employe["Nombre"]
          .toString()
          .toLowerCase()
          .includes(searchResults.toLowerCase()) ||
        employe["Apellidos"]
          .toString()
          .toLowerCase()
          .includes(searchResults.toLowerCase())
      ) {
        searchedPerson.push(employe);
      }
    });
    let searchPersonResults: any = searchedPerson.map((employeData) => {
      return (
        <div className=" perfil-buscador card">
          <Link
            to={{
              pathname: `/Employe/${employeData["Nombre"]} ${employeData["Apellidos"]}`,
              state: { employeData: employeData, AllEmployes: datosBiko },
            }}
          >
            <img
              alt="employee-image"
              src={employeData["ImgUrl"]}
              className="picture-grid "
            ></img>
            <div className="img_description_layer">
              <div className="img_text_container img_employe_data">
                <p className="monstserrat">{employeData["Nombre"]}</p>
                <p className="monstserrat">{employeData["Apellidos"]}</p>
                <p className="monstserrat-normal">{employeData["Rol"]}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return searchPersonResults;
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
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="grid  ">
        <div className="grid-row ">
          {searchResults === ""
            ? printAllBikoEmployes()
            : printSearchedEmploye()}
        </div>
      </div>
    </div>
  );
}
export default HomeView;
