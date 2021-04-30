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
        <div className="search-profile inside-search-profile ">
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
        <div className=" search-profile inside-search-profile col-sm-3">
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
    <div className="landing">
      <div className="header">
        <div className="">
          <picture>
            <source srcSet={logoBiko} type="png" />
            <a href="/">
              <img src={logoBiko} className="logo" alt="logo" />
            </a>
          </picture>
          <div className="header-auto-layout">
            <div className="header-text-container">
              <h1 className="title">
                Busca <strong>Bikonianos</strong>
              </h1>
              <p className="red-text">(lorem ipsum dolor set)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="text-container">
          <p style={{ marginTop: "50px" }} className=" item-text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            pretium tellus.
          </p>
        </div>

        <div>
          <form onSubmit={(event) => getSearchedData(event)}>
            <div className="">
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
      <div className=" ">
        {/* <div className="">
          {searchResults === ""
            ? printAllBikoEmployes()
            : printSearchedEmploye()}
        </div> */}
      </div>
    </div>
  );
}
export default HomeView;
