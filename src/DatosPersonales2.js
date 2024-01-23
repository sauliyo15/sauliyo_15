import React from "react";
import { useState, useEffect } from "react";

export default function DatosPersonales2(props) {

  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setMostrar(true);
  }, []);

  return (
    <div className={`centered-content2 ${mostrar ? 'show' : ''}`}>
      <h2>{props.titulo}</h2>
      {props.datos.map((item) => (
        <div key={item.id}>
          <a href={item.enlace}>
            <div className="row">
              <img src={item.urlImagen} alt="Centered" />
              <div className="info">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
