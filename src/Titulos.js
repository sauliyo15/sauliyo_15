import React from "react";

export default function Titulos(props) {
  return (
    <div className="centered-content">
      <div className="row">
        <img src={props.imageUrl} alt="Centered" />
        <div className="info">
          <h1>{props.titulo}</h1>
          <p className="nickname">{props.nickname}</p>
        </div>
      </div>
      <div className="row">
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
}
