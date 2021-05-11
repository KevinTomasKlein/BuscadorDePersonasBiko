import { Link } from "react-router-dom";
import EmployeCard from "./Employe";

export default function ListOfEmployes({ employes, datosBiko }: any) {
  return employes.map((employeData: any) => (
    <div className="perfil-buscador card" key={employeData.Id}>
      <Link
        to={{
          pathname: `/Employe/${employeData.Nombre} ${employeData.Apellidos}`,
          state: { employeData: employeData, AllEmployes: datosBiko },
        }}
      >
        <EmployeCard
          Nombre={employeData.Nombre}
          Apellidos={employeData.Apellidos}
          Rol={employeData.Rol}
          ImgUrl={employeData.ImgUrl}
        />
      </Link>
    </div>
  ));
}
