import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Formu from "./components/formulario";
import Datosapi from "./components/datos";
import Prueba from "./components/prueba";
import Saludo from "./components/prueba2";
import Error404 from "./components/error404";
import Navbar from "./components/navbar";
import Datosunicos from "./components/datosunicos";
import { Contexto } from "./context/contexto";
import Login from "./components/login";
import { LoginData } from "./context/contextLogin";
import Fechas from "./components/calendario";
import Redu from "./components/redu";
import Protector from "./protector/protector";
import ProtectorLogin from "./protector/protectorLogin";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <LoginData>
        <Contexto>
          <div
            className="App"
            style={{ marginBottom: "10px" }}
          >
            <div className="container">
              <Navbar></Navbar>
            </div>
          </div>
          <Routes>
            <Route element={<ProtectorLogin/>}>
            <Route path="/" element={<Login></Login>} />
            </Route>
            <Route path="*" element={<Error404></Error404>} />
            <Route element={<Protector/>}>
            <Route path="/datos" element={<Datosapi></Datosapi>}></Route>
            <Route path="/formulario" element={<Formu></Formu>}></Route>
            <Route path="/prueba" element={<Prueba></Prueba>} />
            <Route path="/saludo" element={<Saludo></Saludo>} />
            <Route path="/datos/:id" element={<Datosunicos></Datosunicos>} />
            <Route path="/calendario" element={<Fechas></Fechas>} />
            <Route path="/red" element={<Redu></Redu>} /></Route>
          </Routes>
        </Contexto>
      </LoginData>
    </BrowserRouter>
  );
}

export default App;
