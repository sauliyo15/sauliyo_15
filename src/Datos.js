import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Datos(props) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setMostrar(true);
  }, []);

  return (
    <div className={`centered-content2 ${mostrar ? "show" : ""}`}>
      <h2>{props.titulo}</h2>
      {props.datos.map((item) => (
        <div key={item.id}>
          <Link
            to={item.enlace}
            target={item.target_blank ? "_blank" : undefined}
          >
            <div className="row">
              <img src={item.urlImagen} alt="Centered" />
              <div className="info">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
