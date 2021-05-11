import axios from "axios";

export default function getEmployes() {
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
