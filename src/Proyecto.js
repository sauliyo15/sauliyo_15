import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Titulos from "./Titulos";
import Iconos from "./Iconos";
import Puntuacion from "./Puntuacion";
import Datos from "./Datos";

export default function Proyecto(props) {
  let { id } = useParams();
  const objetoEncontrado = props.datos.find((objeto) => objeto.id === id);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setMostrar(true);
  }, []);

  return (
    <>
      {objetoEncontrado ? (
        <div className="content-container">
          <Titulos
            imageUrl={objetoEncontrado.urlImagen}
            titulo={objetoEncontrado.nombre}
            nickname={objetoEncontrado.descripcion}
            descripcion={objetoEncontrado.descripcionLarga}
          />

          <div className={`centered-content2 ${mostrar ? "show" : ""}`}>
            <Puntuacion puntuaciones={objetoEncontrado.puntuaciones} />
          </div>

          {objetoEncontrado.componentes && (
            <Datos
              titulo="Componentes"
              intro={objetoEncontrado.componentes.introduccion}
              datos={objetoEncontrado.componentes.listado}
            />
          )}

          <div className={`centered-content2 ${mostrar ? "show" : ""}`}>
            <Iconos tecnologias={objetoEncontrado.tecnologias} />
          </div>

          <Footer />
        </div>
      ) : (
        <div className="content-container">
          <p>No se encontró un objeto con el nombre {id}</p>
          <Footer />
        </div>
      )}
    </>
  );
}
