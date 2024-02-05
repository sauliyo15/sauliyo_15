import React from "react";

export default function Puntuacion(props) {
  return (
    <div className="puntuacion-container">
      {props.puntuaciones &&
        props.puntuaciones.map((elemento, index) => (
          <div key={index} className="puntuacion-item">
            <img
              src={elemento.urlIcono}
              alt={elemento.valor} 
            />
            {elemento.valor}
          </div>
        ))}
    </div>
  );
}

