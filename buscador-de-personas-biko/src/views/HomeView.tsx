import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

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
        <div className="grid-auto-layout inside-grid-auto-layout">
          <Link
            to={{
              pathname: `/Employe/${employeData["Nombre"]} ${employeData["Apellidos"]}`,
              state: { employeData: employeData, AllEmployes: datosBiko },
            }}
          >
            <img
              alt="employe-image"
              style={{ width: "266.4px", height: "265.6px" }}
              src={employeData["ImgUrl"]}
            ></img>
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
          .toUpperCase()
          .includes(searchResults.toUpperCase()) ||
        employe["Apellidos"]
          .toString()
          .toUpperCase()
          .includes(searchResults.toUpperCase())
      ) {
        searchedPerson.push(employe);
      }
    });
    let searchPersonResults: any = searchedPerson.map((employeData) => {
      return (
        <div className=" inside-grid-auto-layout">
          <Link
            to={{
              pathname: `/Employe/${employeData["Nombre"]} ${employeData["Apellidos"]}`,
              state: { employeData: employeData, AllEmployes: datosBiko },
            }}
          >
            <img
              alt="employee-image"
              style={{ width: "266.4px", height: "265.6px" }}
              src={employeData["ImgUrl"]}
            ></img>
          </Link>
        </div>
      );
    });
    return searchPersonResults;
  }

  return (
    <div className=" ">
      <div className="header-container">
        <div className="header-title-container ">
          <div className=" header-auto-layout ">
            <div className="header-title-auto-layout ">
              <h1 className="header-title-font header-title-font-inside">
                Busca Bikonianos
              </h1>
              <p className="header-red-text header-red-text-inside">
                (lorem ipsum dolor set)
              </p>
            </div>
            <div className="search-box-container main-container ">
              <p className="normal-text normal-text-details text-search-box-auto-layout ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vitae pretium tellus.
              </p>
              <form className=" " onSubmit={(event) => getSearchedData(event)}>
                <input
                  type="text"
                  placeholder="Nombre bikoniano"
                  className="input-box-auto-layout "
                  id="searchBox"
                ></input>
                <button
                  className="icon-container btn-container"
                  type="submit"
                ></button>
              </form>
              <div className="grid-container-auto-layout">
                {searchResults === ""
                  ? printAllBikoEmployes()
                  : printSearchedEmploye()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeView;
