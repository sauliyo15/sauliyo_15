import "./App.css";
import { datos } from "./constants/datos";
import Header from "./Header";
import DatosPersonales from "./DatosPersonales";
import DatosPersonales2 from "./DatosPersonales2";

function App() {
  
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
        <DatosPersonales2
          titulo="Mis estudios realizados"
          datos={datos.cursos}
        />
        <DatosPersonales2
          titulo="Contacto y recursos disponibles"
          datos={datos.contacto}
        />
        <div className="centered-content3">
          <img src="/imagenes/letra_s.png"></img>
          <p>© 2024 sauliyo15.glitch.me by Saúl García v1.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
