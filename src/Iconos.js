
export default function Iconos(props) {
    return(
        <div className="row-icons">
            {props.tecnologias && props.tecnologias.map((icon, index) => (
              <div key={index}>
                <img className="icono"
                  src={icon.urlIcono}
                  alt={icon.nombre}
                />
              </div>
            ))}
          </div>
    );
}