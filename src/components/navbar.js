import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/contextLogin";
import "./navbar.css";
function Navbar() {
  const { setuser ,user} = useContext(DataContext);
  const cerrar = () => {
    setuser(null);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/datos" className="nav-link">
                  Datos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/formulario" className="nav-link">
                  Formulario
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/prueba" className="nav-link">
                  Prueba
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/saludo" className="nav-link">
                  Contador
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/calendario" className="nav-link">
                  Fecha
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/red" className="nav-link">
                  Comprar
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"250px"}}>
            {user
                ?<li
                className="nav-item"
                style={{ color: "goldenrod" }}
                
              >
              <i class="fa-solid fa-user"></i> {user.email}
              </li>:null}
                {user
                ?<li
                className="nav-item"
                style={{ color: "red",marginLeft:"20px" }}
                onClick={cerrar}
              >
                Cerrar Session
              </li>:null}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

/*
<NavLink to="/datos">Datos</NavLink>
        <NavLink to="/formulario">Formulario</NavLink>
        <NavLink to="/prueba">Prueba</NavLink>
        <NavLink to="/saludo">Saludo</NavLink>*/
