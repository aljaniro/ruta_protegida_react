import { Fragment, useContext, useState } from "react";
import { bolsa } from "../context/contexto";
function Saludo() {
  const {datos,setdatos} = useContext(bolsa)
  const [num, setnum] = useState(0);
  const [numeros] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const aumento = () => {
    setnum(num + 1);
    setdatos("alvaro")
    console.log(datos)
  };
  const disminue = () => {
    setnum(num - 1);
  };
  return (
    <Fragment>
        <div className="container">

        <ol className="list-group list-group-numbered">
        {numeros.map((val, index) => (
          <li className="list-group-item" key={index}>
            Posicion {index} - Valor {val}
          </li>
        ))}
      </ol>

      <h1>{num}</h1>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={aumento}>
          Aumentar
        </button>
        <button className="btn btn-primary" type="button" onClick={disminue}>
          Disminuir
        </button>
      </div>
        </div>
     
    </Fragment>
  );
}
export default Saludo;
