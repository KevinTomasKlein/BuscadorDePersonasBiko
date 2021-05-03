import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import logoBiko from "../images/logoBiko.png";
export function DetailsView({ location }: any) {
  const employeDetails = location.state.employeData;
  const AllEmployes: any[] = location.state.AllEmployes;
  const teamMembers: any[] = [];
  let { url } = useRouteMatch();

  function getDate() {
    if (employeDetails["Fecha incorporación a Biko"] !== undefined) {
      return (
        <div className=" icon2_container">
          <FontAwesomeIcon icon={faCalendar} />
          <p className=" ">Desde </p>
          <p className="">
            {employeDetails["Fecha incorporación a Biko"].split("/")[2]}
          </p>
        </div>
      );
    } else {
      return "";
    }
  }

  function GetTeamMembers() {
    AllEmployes.map((employe) => {
      if (
        employe["Equipo"] === employeDetails["Equipo"] &&
        teamMembers.length < 3
      ) {
        teamMembers.push(employe);
      }
    });
    return (
      <div className="d-flex">
        {teamMembers.map((teamMember) => (
          <div key={teamMember}>
            <Link
              to={{
                pathname: `${url}`,
                state: { employeData: teamMember, AllEmployes: AllEmployes },
              }}
            >
              <div className="card">
                <img
                  alt="employee-image"
                  className="card-image mx-auto"
                  style={{ width: "200px", height: "200x" }}
                  src={teamMember["ImgUrl"]}
                ></img>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="main-container">
      <img
        alt="employe-image"
        className=" img_details"
        src={employeDetails["ImgUrl"]}
      ></img>
      <div className="data-container">
        <p className="side-bold-text">{employeDetails["Nombre"]}</p>
        <p className="side-bold-text" style={{ fontWeight: "bold" }}>
          {employeDetails["Apellidos"]}
        </p>
        <p className="side-red-text">{"(" + employeDetails["Rol"] + ")"}</p>

        <div className="icons-container ">
          <div className="icon1_container">
            <FontAwesomeIcon icon={faRocket} className="rocket-details" />
            <p className=" ">{employeDetails["Equipo"]}</p>
          </div>
          {getDate()}
        </div>
      </div>
      <picture>
        <source srcSet={logoBiko} type="png" />
        <a href="/">
          <img src={logoBiko} className="logoDetails" alt="logo" />
        </a>
      </picture>
      <p className="">Otra gente de fenix</p>

      <div className="">
        <div className="card-group">{GetTeamMembers()}</div>
      </div>
    </div>
  );
}
