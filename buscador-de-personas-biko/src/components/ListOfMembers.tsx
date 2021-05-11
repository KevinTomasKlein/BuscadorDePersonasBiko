import { Link } from "react-router-dom";
import EmployeCard from "./Employe";

export default function ListOfMembers({ members, AllEmployes, url }: any) {
  return members.map((member: any) => (
    <div key={member.Id}>
      <Link
        to={{
          pathname: `${url}/${member["Nombre"]} ${member.Apellidos}`,
          state: { employeData: member, AllEmployes: AllEmployes },
        }}
      >
        <EmployeCard
          Nombre={member.Nombre}
          Apellidos={member.Apellidos}
          Rol={member.Rol}
          ImgUrl={member.ImgUrl}
        />
      </Link>
    </div>
  ));
}
