import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { RocketOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";
import logoBiko from "../images/logoBiko.png";
import { CalendarOutlined } from "@ant-design/icons";
export function DetailsView({ location }: any) {
  const employeDetails = location.state.employeData;
  const AllEmployes: any[] = location.state.AllEmployes;
  const teamMembers: any[] = [];
  const techMembers: any[] = [];

  let { url } = useRouteMatch();

  function getDate() {
    if (employeDetails["Fecha incorporación a Biko"] !== undefined) {
      return (
        <div className="calendar-container ">
          <CalendarOutlined className="calendar" />

          <p className="calendar-text">
            {"Desde" +
              " " +
              employeDetails["Fecha incorporación a Biko"].split("/")[2]}
          </p>
        </div>
      );
    } else {
      return "";
    }
  }
  function getTechnologies() {
    const technologies: string[] = employeDetails["Tecnologias"].split(" ");

    return (
      <div className="tech-container">
        {technologies.map((technologie) => (
          <button className=" tech-btn tech-text">{technologie}</button>
        ))}
      </div>
    );
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
              <div className="card team-picture">
                <img
                  alt="employee-image"
                  className="card-image mx-auto"
                  style={{ width: "264px", height: "264px" }}
                  src={teamMember["ImgUrl"]}
                ></img>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  function getTechMembers() {
    AllEmployes.map((employe) => {
      if (
        employe["Tecnologias"] === employeDetails["Tecnologias"] &&
        techMembers.length < 4
      ) {
        techMembers.push(employe);
      }
    });

    return (
      <div className="d-flex">
        {techMembers.map((techMember) => (
          <div key={techMember}>
            <Link
              to={{
                pathname: `${url}`,
                state: { employeData: techMember, AllEmployes: AllEmployes },
              }}
            >
              <div className="card members-picture">
                <img
                  alt="employee-image"
                  className="card-image "
                  style={{
                    width: "264px",
                    height: "264px",
                  }}
                  src={techMember["ImgUrl"]}
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
        <p className="side-bold-text">
          {employeDetails["Nombre"] + " "}
          <span style={{ fontWeight: "bold" }}>
            {employeDetails["Apellidos"]}
          </span>
        </p>
        <p className="side-red-text">{"(" + employeDetails["Rol"] + ")"}</p>

        <div className="icons-container">
          <div className="rocket-container ">
            <RocketOutlined className="rocket " />
            <p className="team-text">{employeDetails["Equipo"]}</p>
          </div>
          {getDate()}
        </div>
        <div className="text-btn-container">
          {getTechnologies()}
          <div className=" pharagraph-container ">
            <p className="pharagraph-auto-layout ">
              <span className="pharagraph">{employeDetails["Sobre mí"]}</span>
            </p>
          </div>
        </div>
      </div>
      <picture>
        <source srcSet={logoBiko} type="png" />
        <a href="/">
          <img src={logoBiko} className="logoDetails" alt="logo" />
        </a>
      </picture>

      <div className="members-team-container">
        <div className="members-title">
          <p className="title-details">Miembros de react</p>
        </div>
        <div className="members-row">{getTechMembers()}</div>

        <div className="team-container">
          <p>
            <i className="arrow-shape"></i>
          </p>
          <p>
            <i className="arrow down"></i>
          </p>
          <div className="team-title">
            <p className="team-title-details">Otra gente de fenix</p>
          </div>
          <div className="card-group">{GetTeamMembers()}</div>
        </div>
      </div>
    </div>
  );
}
