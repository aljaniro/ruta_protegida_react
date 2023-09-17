import { Fragment, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Datosapi() {
  

  
  const cargar = async () => {
    const datosanime = await fetch("https://kitsu.io/api/edge/anime");
    const animes = await datosanime.json();
    setdatos(animes.data);
  };

  //const info = useRef()
  const [datos, setdatos] = useState([]);
  const { register, handleSubmit } = useForm();
  const nave = useNavigate();
  useEffect(() => {
    cargar();
  }, []);

  const prueba = (event, e) => {
   

    const filtro = datos.filter((item) => item.attributes.slug === event.busca);
   
    setdatos(filtro);
  };
  return (
    <Fragment>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        
       
        <form onSubmit={handleSubmit(prueba)}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="busca"
              {...register("busca", {
                required: "Required",
              })}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Buscar
            </button>
            <button
              className="btn btn-outline-secondary"
              type="reset"
              id="button-addon2"
              onClick={cargar}
            >
              Reset
            </button>
          </div>
        </form>
        {datos.map((item, index) => (
          <>
            <div
              className="card"
              style={{
                marginTop: "10px",
                border: "outset",
                background: "#870000",
              }}
            >
              <img
                key={index}
                src={item.attributes.posterImage.small}
                alt=""
                style={{ alignSelf: "center", marginTop: "10px" }}
              ></img>
              <div className="card-body" style={{ color: "white" }}>
                <h2 className="card-title">{item.attributes.slug}</h2>
                <p className="card-text">{item.attributes.synopsis}</p>
              </div>
              <ul
                className="list-group list-group-flush"
                style={{ marginBottom: "30px", background: "#870000" }}
              >
                <li
                  className="list-group-item"
                  style={{ background: "#870000", color: "white" }}
                >
                  Episodios {item.attributes.episodeCount}
                </li>
                <li
                  className="list-group-item"
                  style={{ background: "#870000", color: "white" }}
                >
                  Fecha de inicio {item.attributes.startDate}
                </li>
                <li
                  className="list-group-item"
                  style={{ background: "#870000", color: "white" }}
                >
                  Fin {item.attributes.endDate}
                </li>
              </ul>

              <button
                className="btn btn-dark"
                onClick={() => {
                  nave(`/datos/${item.id}`, { replace: true });
                }}
              >
                VER
              </button>
            </div>
          </>
        ))}
      </div>
    </Fragment>
  );
}
export default Datosapi;
/*<ul>
        {datos.map((item, index) => (
          <li key={index}>{item.attributes.slug}</li>
        ))}
      </ul>*/
