import { Fragment, useState } from "react";

function Formu() {
  const [datos, setdatos] = useState({
    email: "",
    password: "",
  });

  const captureDatos = ((event)=>{
    console.log(event.target.value)
    setdatos({...datos,
    [event.target.name] : event.target.value}
        )
  })

  const sendDatos = ((event)=>{
    event.preventDefault()
    if(!datos.email.trim() || !datos.password.trim()){
        console.log("el campo esta vacio")
    }
    console.log(datos)
  })
  return (
    <Fragment>
      <div className="container">
        <form onSubmit={sendDatos}>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={captureDatos}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={captureDatos}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {console.log(datos)}
        <h1>Correo {datos.email}</h1>
        <h1>Password {datos.password}</h1>
      </div>
    </Fragment>
  );
}

export default Formu;
