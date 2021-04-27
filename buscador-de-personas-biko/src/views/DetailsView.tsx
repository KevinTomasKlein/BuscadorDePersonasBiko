import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function DetailsView({ location }: any) {
  const employeDetails = location.state.employeData;

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="card-horizontal ">
          <img
            alt="employe-image"
            className="card-image mx-auto"
            style={{ width: "729.57px", height: "711.28px" }}
            src={employeDetails["ImgUrl"]}
          ></img>
          <div className="card-body text-left">
            <p className="card-title text">{employeDetails["Nombre"]}</p>
            <h5 className="card-title bold-text">
              {employeDetails["Apellidos"]}
            </h5>
            <p className="card-text red-text">
              {"(" + employeDetails["Equipo"] + ")"}
            </p>
            <p className="card-text">{"Rol: " + employeDetails["Rol"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
