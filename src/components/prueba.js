import React, { useState, Fragment } from "react";
import {useForm} from 'react-hook-form'
function Prueba() {

  const {register,handleSubmit} = useForm()
  const [datos, setdatos] = useState([
 /* {
    nombre:'',
    apellido:'',
    telefono:'',
    correo:''
  }*/
    
  ]);
  
 

  const enviar = (data,e) => {
    console.log(data)
    setdatos([...datos,data])
    
    
    
   
    
    /* setdatos([{ ...datos, 
    [event.target.name] : event.target.value
   }]);*/
  };

  return (
    <div
      className="container"
      style={{ display: "grid", placeItems: "center" }}
    >
      {console.log(datos)}
      <div className="info">
        <h3>Datos Personales</h3>
        <form onSubmit={handleSubmit(enviar)}>
          <Fragment>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre
              </span>
              <input
                type="text"
                className="form-control"
                
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="nombre"
                {...register("name", {
                  required: "Required",
                })}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Apellido
              </span>
              <input
                type="text"
                className="form-control"
                
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="apellido"
                {...register("apellido", {
                  required: "Required",
                })}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Telefono
              </span>
              <input
                type="tel"
                className="form-control"
                
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="telefono"
                {...register("telefono", {
                  required: "Required",
                })}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Correo
              </span>
              <input
                type="email"
                className="form-control"
                
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="correo"
                {...register("email", {
                  required: "Required",
                })}
              />
            </div>

            <button type="submit" className="btn btn-success">
              enviar
            </button>
          </Fragment>
        </form>
      </div>

      <table className="table">
        {console.log(datos)}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((value, index) => (
            <>
              <tr key={index}>
                <th scope="row" >{index}</th>
                <td >{value.name}</td>
                <td >{value.apellido}</td>
                <td >{value.telefono}</td>
                <td >{value.email}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Prueba;
