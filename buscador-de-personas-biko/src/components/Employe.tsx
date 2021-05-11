export default function Employe({ ImgUrl, Nombre, Apellidos, Rol }: any) {
  return (
    <>
      <div className="card team-picture">
        <img
          alt="employe"
          className="card-image mx-auto"
          style={{ width: "264px", height: "264px" }}
          src={ImgUrl}
        ></img>
        <div className="img_description_layer">
          <div className="img_text_container img_employe_data">
            <p className="monstserrat">{Nombre}</p>
            <p className="monstserrat">{Apellidos}</p>
            <p className="monstserrat-normal">{Rol}</p>
          </div>
        </div>
      </div>
    </>
  );
}
