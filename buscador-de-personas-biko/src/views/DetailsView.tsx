import { RocketOutlined } from "@ant-design/icons";
import { useRouteMatch } from "react-router-dom";
import logoBiko from "../images/logoBiko.png";
import { CalendarOutlined } from "@ant-design/icons";
import ListOfMembers from "../components/ListOfMembers";
export function DetailsView({ location }: any) {
  const employeDetails = location.state.employeData;
  const AllEmployes: any[] = location.state.AllEmployes;
  const teamMembers: any[] = [];
  const techMembers: any[] = [];

  let { url } = useRouteMatch();

  function getDate() {
    if (employeDetails.FechaIncorporacion !== undefined) {
      return (
        <div className="calendar-container ">
          <CalendarOutlined className="calendar" />

          <p className="calendar-text">
            {"Desde "}
            <b>{employeDetails.FechaIncorporacion.split("/")[2]}</b>
          </p>
        </div>
      );
    } else {
      return "";
    }
  }
  function getTechnologies() {
    const technologies: string[] = employeDetails.Tecnologias.split(" ");

    return (
      <div className="tech-container">
        {technologies.map((technologie) => (
          <button className=" tech-btn tech-text">{technologie}</button>
        ))}
      </div>
    );
  }

  function GetTeamMembers() {
    AllEmployes.forEach((employe) => {
      if (employe.Equipo === employeDetails.Equipo && teamMembers.length < 3) {
        teamMembers.push(employe);
      }
    });

    return (
      <div className="d-flex">
        <ListOfMembers
          members={teamMembers}
          AllEmployes={AllEmployes}
          url={url}
        />
      </div>
    );
  }

  function getTechMembers() {
    AllEmployes.forEach((employe) => {
      if (
        employe.Tecnologias === employeDetails.Tecnologias &&
        techMembers.length < 4
      ) {
        techMembers.push(employe);
      }
    });

    return (
      <div className="d-flex">
        <ListOfMembers members={techMembers} AllEmployes={AllEmployes} />
      </div>
    );
  }

  return (
    <div className="main-container">
      <img
        alt="employe"
        className="img_details"
        src={employeDetails.ImgUrl}
      ></img>
      <div className="data-container">
        <h1 className="side-bold-text">{employeDetails.Nombre + " "}</h1>
        <h1 className="side-bold-text">
          <b>{employeDetails.Apellidos}</b>
        </h1>

        <p className="side-red-text">{"(" + employeDetails.Rol + ")"}</p>

        <div className="icons-container">
          <div className="rocket-container">
            <RocketOutlined className="rocket" />
            <p className="team-text">{employeDetails.Equipo}</p>
          </div>
          {getDate()}
        </div>
        <div className="text-btn-container">
          {getTechnologies()}
          <div className=" pharagraph-container">
            <p className="pharagraph-auto-layout">
              <span className="pharagraph">{employeDetails.SobreMi}</span>
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
