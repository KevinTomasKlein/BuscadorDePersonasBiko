import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch, useParams } from "react-router-dom";

export function DetailsView({ location }: any) {
  const employeDetails = location.state.employeData;
  const AllEmployes: any[] = location.state.AllEmployes;
  const teamMembers: any[] = [];
  let { url } = useRouteMatch();
  let Id = useParams();
  console.log(Id);

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
                pathname: `/Employe/${teamMember["Nombre"]} ${teamMember["Apellidos"]}`,
                state: { employeData: teamMember, AllEmployes: AllEmployes },
              }}
            >
              <div className="card">
                <img
                  key={teamMember["Equipo"]}
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
    <div className="  ">
      <div className="container pl-0">
        <div className="flex-row d-flex flex-wrap flex-lg-nowrap">
          <img
            alt="employe-image"
            className="float-left "
            style={{ width: "700px", height: "700px", backgroundColor: "red" }}
            src={employeDetails["ImgUrl"]}
          ></img>
          <div className="card-body text-left  ml-5 ">
            <p className="card-title title-text">{employeDetails["Nombre"]}</p>
            <h5 className="card-title bold-title-text">
              {employeDetails["Apellidos"]}
            </h5>
            <p className="card-text red-text">
              {"(" + employeDetails["Equipo"] + ")"}
            </p>
            <div className="d-inline-flex">
              <div className="d-inline-flex">
                <FontAwesomeIcon icon={faRocket} />
                <p className=" bold-text">{employeDetails["Equipo"]}</p>
              </div>

              <div className="d-inline-flex col-md-1 ">
                <FontAwesomeIcon icon={faCalendar} />
                <p className=" date-text ml-2 mr-1">Desde </p>
                <p className="mx-0 bold-text">
                  {employeDetails["Fecha incorporación a Biko"] !== undefined
                    ? employeDetails["Fecha incorporación a Biko"].split("/")[2]
                    : ""}
                </p>
              </div>
            </div>
            <p className="card-text">{"Rol: " + employeDetails["Rol"]}</p>
          </div>
        </div>
        <p className="bold-subtitle-text">Otra gente de fenix</p>
      </div>
      <div className="container">
        <div className="card-group">{GetTeamMembers()}</div>
      </div>
    </div>
  );
}
