import "./App.css";
import { datos } from "./constants/datos";
import Header from "./Header";
import DatosPersonales from "./DatosPersonales";

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
      </div>

    </div>
  );
}

export default App;
