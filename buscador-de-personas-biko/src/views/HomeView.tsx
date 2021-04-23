import React, { useState, useEffect } from "react";
import axios from "axios";
export function HomeView() {
  const [datosBiko, setDatosBiko] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const getBikoEmployeesData = async () => {
    await axios
      .get("./data.json")
      .then((response) => {
        setDatosBiko(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    getBikoEmployeesData();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <div className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex offset-lg-10 offset-md-8">
              {/* <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search Flower"
                  aria-label="Search Flower"
                  onChange={(event) => getSearchedData(event)}
                ></input> */}
            </form>
          </div>
        </div>
        <div className="row">
          {datosBiko.map((employesData) => (
            <div className="col-3 ">
              <div className="card">
                <img
                  alt="flower-images"
                  className="card-image"
                  style={{ width: 200, height: 200 }}
                  src="../images/mock-up-image.jpg"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{employesData.Nombre}</h5>
                  <p className="card-text">
                    {"Binomial name: " + employesData.Apellidos}
                  </p>
                  <p className="card-text">
                    {"Precio: " + employesData.Equipo + " €"}
                  </p>
                  <p className="card-text">
                    {"Waterings per week: " + employesData.Rol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
