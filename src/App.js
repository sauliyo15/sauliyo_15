import "./App.css";
import { datos } from "./constants/datos";
import Header from "./Header";
import Footer from "./Footer";
import Curso from "./Curso";
import Proyecto from "./Proyecto";
import NotFound from "./NotFound";
import Titulos from "./Titulos";
import Datos from "./Datos";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [resultados, setResultados] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = () => {
      setTimeout(() => {
        setResultados(datos);
        setCargando(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="content-container">
              <Titulos
                titulo={
                  datos.personales.nombre + " " + datos.personales.apellidos
                }
                nickname={datos.personales.nickname}
                descripcion={datos.personales.descripcion}
                imageUrl={datos.personales.urlImagen}
              />

              {cargando && (
                <img
                  className="cargando"
                  src="/imagenes/cargando.gif"
                  alt="cargando"
                ></img>
              )}

              {!cargando && (
                <Datos
                  titulo="Mis estudios realizados"
                  datos={resultados.cursos}
                />
              )}

              {!cargando && (
                <Datos
                  titulo="Algunos de mis proyectos y aplicaciones"
                  datos={resultados.proyectos}
                />
              )}

              {!cargando && (
                <Datos
                  titulo="Contacto y recursos disponibles"
                  datos={resultados.contacto}
                />
              )}
              <Footer />
            </div>
          }
        />
        
        <Route path="/proyectos/:id" element={<Proyecto datos={datos.proyectos}/>}
        />
        <Route path="/cursos/:id" element={<Curso datos={datos.cursos}/>}
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
