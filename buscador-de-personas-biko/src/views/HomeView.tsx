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
        <div className="col-md-4 col-lg-3">
          <Link
            to={{
              pathname: `/Employe/${employeData["Nombre"]} ${employeData["Apellidos"]}`,
              state: { employeData: employeData, AllEmployes: datosBiko },
            }}
          >
            <div className="card">
              <img
                alt="employee-image"
                className="card-image mx-auto"
                style={{ width: "200px", height: "200x" }}
                src={employeData["ImgUrl"]}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{employeData["Nombre"]}</h5>
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
        <div className="col-md-4 col-lg-3">
          <Link
            to={{
              pathname: `/Employe/${employeData["Nombre"]} ${employeData["Apellidos"]}`,
              state: { employeData: employeData, AllEmployes: datosBiko },
            }}
          >
            <div className="card">
              <img
                alt="employee-image"
                className="card-image mx-auto"
                style={{ width: "200px", height: "200x" }}
                src={employeData["ImgUrl"]}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{employeData["Nombre"]}</h5>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return searchPersonResults;
  }

  return (
    <div className="container">
      <h1 className="header-title">Busca Bikonianos</h1>
      <p className="red-text">(lorem ipsum dolor set)</p>
      <p className="text-above-header">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        pretium tellus.
      </p>

      <form
        className="input-group mb-5"
        onSubmit={(event) => getSearchedData(event)}
      >
        <input
          type="search"
          placeholder="Nombre bikoniano"
          className="form-control"
          id="searchBox"
        ></input>
        <span className="input-group-btn">
          <button
            className="btn btn-danger
          "
            type="submit"
          >
            <i className="fa fa-search"></i>
          </button>
        </span>
      </form>

      <div className="row">
        {searchResults === "" ? printAllBikoEmployes() : printSearchedEmploye()}
      </div>
    </div>
  );
}
export default HomeView;
