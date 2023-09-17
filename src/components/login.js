import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../context/contextLogin";
import {  useNavigate } from "react-router-dom";
import './login.css'
function Login() {
  const dataform = useForm();
  const { user, setuser } = useContext(DataContext);
  const nave = useNavigate();
  const prueba = (event) => {
    try {
      console.log(event);
      setuser({ email: event.username, password: event.password });
      nave(`/datos`, { replace: true });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container" style={{display:"grid",placeItems:"center"}}>
      
      <div className="card" style={{width:"500px",padding:"20px",height:"400px",marginTop:"50px"}}>
      <h3 className="card-title text-center">INICIAR SESION</h3>
      <form onSubmit={dataform.handleSubmit(prueba)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...dataform.register("username", {
              required: "Required",
            })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            {...dataform.register("password", {
              required: "Required",
            })}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{width:"100%"}}>
          Enviar
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;
