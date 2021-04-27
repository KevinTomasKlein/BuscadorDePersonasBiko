export function DetailsView() {
  return (
    <div className="container">
      <h1 className="header-title">Busca Bikonianos</h1>
      <p className="red-text">(lorem ipsum dolor set)</p>
      <p className="text-above-header">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        pretium tellus.
      </p>

      <form className="input-group mb-5">
        <input
          type="search"
          placeholder="Nombre bikoniano"
          className="form-control"
          id="searchBox"
        ></input>
        <span className="input-group-btn">
          <button
            className="btn btn-danger
          "
            type="submit"
          >
            <i className="fa fa-search"></i>
          </button>
        </span>
      </form>

      <div className="row"></div>
    </div>
  );
}
