import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(props) {
  return (
    <div>
      <img
        src={"../imagenes/notfound.jpg"}
        alt="logo"
        style={{ width: "25rem", height: "18rem" }}
      />
      <br />
      <h2 id="info">Ruta no encontrada</h2>
      <br />
      <Link to={"/"}>
        <button>Volver Atrás</button>
      </Link>
    </div>
  );
}
