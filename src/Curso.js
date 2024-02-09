import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Titulos from "./Titulos";
import Iconos from "./Iconos";
import Datos from "./Datos";

export default function Curso(props) {
  let { id } = useParams();
  const objetoEncontrado = props.datos.find((objeto) => objeto.id === id);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

          {objetoEncontrado.cursos && (
            <Datos
            titulo="Cursos del grado"
            datos={objetoEncontrado.cursos}
          />
          )}

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

          {objetoEncontrado.tfg && (
            <>
              <Datos
              titulo={objetoEncontrado.tfg[0].titulo}
              datos={objetoEncontrado.tfg}
              />
              <div className={`centered-content2 ${mostrar ? "show" : ""}`}>
                <Iconos tecnologias={objetoEncontrado.tfg[0].tecnologias}/>
              </div>
            </>            
          )}

          {objetoEncontrado.practicas && (
            <>
              <Datos
              titulo={objetoEncontrado.practicas[0].titulo}
              datos={objetoEncontrado.practicas}
              />
              <div className={`centered-content2 ${mostrar ? "show" : ""}`}>
                <Iconos tecnologias={objetoEncontrado.practicas[0].tecnologias}/>
              </div>
            </>            
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
