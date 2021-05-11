import axios from "axios";

<<<<<<< HEAD
export default function getBikoData() {
=======
export default function getEmployes() {
>>>>>>> services
  const fetchData = async () => {
    const { data } = await axios.get("dataBiko.json");
    const employes = data.map((employe: any) => {
      const {
        ImgUrl,
        Nombre,
        Apellidos,
        Rol,
        FechaIncorporacion,
        SobreMi,
        Equipo,
        Tecnologias,
        Id,
      }: any = employe;

      return {
        Nombre,
        Apellidos,
        Rol,
        ImgUrl,
        FechaIncorporacion,
        SobreMi,
        Equipo,
        Tecnologias,
        Id,
      };
    });
    return employes;
  };
  return fetchData();
}
