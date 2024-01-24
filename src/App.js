import "./App.css";
import { datos } from "./constants/datos";
import Header from "./Header";
import DatosPersonales from "./DatosPersonales";
import DatosPersonales2 from "./DatosPersonales2";
import { useEffect, useState } from "react";

function App() {

  const [resultados, setResultados] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    
    const fetchData = () => {
      setTimeout(()=> {
        setResultados(datos);
        setCargando(false); 
      }, 3000)             
    };

    fetchData();

  }, []);
  
  return (
    <div>
      <Header />
      <div className="content-container">
        <DatosPersonales
          titulo={datos.personales.nombre + " " + datos.personales.apellidos}
          nickname={datos.personales.nickname}
          descripcion={datos.personales.descripcion}
          imageUrl={datos.personales.urlImagen}
        />

        {cargando && (
          <img className="cargando" src="/imagenes/cargando.gif" alt="cargando"></img>
        )}

        {!cargando && (<DatosPersonales2
          titulo="Mis estudios realizados"
          datos={resultados.cursos}
        />)}

        {!cargando && (<DatosPersonales2
          titulo="Algunos de mis proyectos y aplicaciones"
          datos={resultados.proyectos}
        />)}

        {!cargando && (<DatosPersonales2
          titulo="Contacto y recursos disponibles"
          datos={resultados.contacto}
        />)}
        
        
        <div className="centered-content3">
          <img src="/imagenes/letra_s.png" alt="Copyright"></img>
          <p>© 2024 sauliyo15.glitch.me by Saúl García v1.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
