import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export function DetailsView({ location }: any) {
  const employeDetails = location.state.employeData;
  const AllEmployes: any[] = location.state.AllEmployes;
  return (
    <div className=" displayContainer">
      <div className="container-fluid">
        <div className="flex-row d-flex col-md-10 ">
          <img
            alt="employe-image"
            className="float-left img-fluid"
            src={employeDetails["ImgUrl"]}
          ></img>
          <div className="card-body text-left">
            <p className="card-title title-text">{employeDetails["Nombre"]}</p>
            <h5 className="card-title bold-title-text">
              {employeDetails["Apellidos"]}
            </h5>
            <p className="card-text red-text">
              {"(" + employeDetails["Equipo"] + ")"}
            </p>
            <div>
              <div className="d-inline-flex">
                <FontAwesomeIcon icon={faRocket} />
                <p className=" bold-text">{employeDetails["Equipo"]}</p>
              </div>

              <div className="d-inline-flex ">
                <FontAwesomeIcon icon={faCalendar} />
                <p className=" date-text ml-2 mr-1">Desde </p>
                <p className="mx-0 bold-text">
                  {employeDetails["Fecha incorporación a Biko"].split("/")[2]}
                </p>
              </div>
            </div>
            <p className="card-text">{"Rol: " + employeDetails["Rol"]}</p>
          </div>
        </div>
        <div className="row">
          <h5 className="bold-title-text">Otra gente de fenix</h5>
        </div>
      </div>
    </div>
  );
}
