import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Titulos from "./Titulos";
import Iconos from "./Iconos";
import Datos from "./Datos";

export default function Element(props) {
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

            <Iconos tecnologias={objetoEncontrado.tecnologias}/>

            <h2>Información</h2>
            <div className="row">
              <div>
                <p>
                  Entidad: <strong>{objetoEncontrado.entidad}</strong>
                </p>
                <p>
                  Edición: <strong>{objetoEncontrado.edicion}</strong>
                </p>
                <p>
                  Modalidad: <strong>{objetoEncontrado.modalidad}</strong>
                </p>
                <p>
                  Duración: <strong>{objetoEncontrado.duracion}</strong>
                </p>
              </div>
              <Link to={objetoEncontrado.urlDiploma} target="_blank">
                <img
                  className="diploma"
                  src={objetoEncontrado.urlDiploma}
                  alt="diploma"
                />
              </Link>
            </div>
          </div>

          {objetoEncontrado.proyectos && (
            <Datos titulo="Proyectos del curso" intro={objetoEncontrado.proyectos.introduccion} datos={objetoEncontrado.proyectos.listado}/>
          )}

          {objetoEncontrado.temario && (
            <div className={`centered-content2 ${mostrar ? "show" : ""}`}>
              <h2>Módulos del curso</h2>
              {objetoEncontrado.temario.map((item, index) => (
                <div>
                  <div className="row">
                    <img
                      src={`/imagenes/numeros/numero-${index + 1}.png`}
                      alt={`${index + 1}`}
                    />
                    <div className="info">
                      <p>{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
