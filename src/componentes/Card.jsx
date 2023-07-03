import "./card.css";

function Card({name, description}) {
  return (
    <div className="container">
      <img src="\src\img\prpyectocole.png" alt="" />
      {/* <div className="shadow"></div> */}
      <div className="container-card">
        <div className="container-header">
          <h2>{name}</h2>
          <div className="icons">
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-rocket"></i>
          </div>
        </div>
        <p className="description-card">
          {description}
        </p>
        <div className="footer-card">
          <h3>Tecnologias utilizadas:</h3>
          <div className="footer-icons">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;