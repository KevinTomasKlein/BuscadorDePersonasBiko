import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function HomeView() {
  const [datosBiko, setDatosBiko] = useState<any[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("dataBiko.json");
      setDatosBiko(data);
    };
    fetchData();
  }, []);

  function printAllBikoEmployes() {
    let Result: any = datosBiko.map((employesData) => {
      return (
        <div className="col-md-4 col-lg-3">
          <div className="card">
            <img
              alt="employee-image"
              className="card-image mx-auto"
              style={{ width: "200px", height: "200x" }}
              src={employesData["ImgUrl"]}
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                {"Nombre: " + employesData["Nombre"]}
              </h5>
              <h5 className="card-title">
                {"Apellido: " + employesData["Apellidos"]}
              </h5>
              <p className="card-text">{"Equipo: " + employesData["Equipo"]}</p>
              <p className="card-text">{"Rol: " + employesData["Rol"]}</p>
            </div>
          </div>
        </div>
      );
    });
    return Result;
  }

  return (
    <div className="container">
      <h1 className="header-title">Busca Bikonianos</h1>
      <p className="red-text">(lorem ipsum dolor set)</p>
      <p className="text-above-header">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        pretium tellus.
      </p>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nombre bikoniano"
          className="form-control"
          onChange={(event) => event.target.value}
        ></input>
        <div className="input-group-append ">
          <button className="icon-search btn btn-primary">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="row">{printAllBikoEmployes()}</div>
    </div>
  );
}
export default HomeView;
