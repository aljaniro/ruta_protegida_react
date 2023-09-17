import React, { useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function Redu() {
  const init = [];
  let i = 0;
  const identi = useRef();
  const reducer = (state, action) => {
    console.log(state);
    let n = state.nombre;
    let c = state.cantidad;

    console.log(c);
    switch (action.type) {
      case "añadir":
        console.log("soy tu",action.payload)
        n = action.payload.nombre;
        c = action.payload.cantidad;
        i = valor.id + 1;
        console.log(valor.id);
        console.log(action.payload);
        return [...state, { id: i, nombre: n, cantidad: c }];

      case "sumar":
        return state.map((valor) =>
          action.payload === valor.id
            ? { ...valor, cantidad: valor.cantidad + 1 }
            : valor
        );

      case "restar":
        return state.map((valor) =>
          action.payload === valor.id
            ? { ...valor, cantidad: valor.cantidad - 1 }
            : valor
        );

      case "eliminar":
        return state.filter((dato) => dato.id !== action.payload);

      default: {
        return state;
      }
    }
  };
  const [valor, setvalor] = useState([
    {
      id: 0,
      nombre: "",
      cantidad: null,
    },
  ]);
  const { register, handleSubmit } = useForm();
  const [compra, dispath] = useReducer(reducer, init);

  const enviar = (even, e) => {
    console.log(even);
    setvalor({ id: compra.length, nombre: even.nombre, cantidad: 1 });
    dispath({ type: "añadir",payload:{nombre:even.nombre,cantidad:1} });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(enviar)}>
        <div className="mb-3">
          <label className="form-label">Ingrese su Producto</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="nombre"
            {...register("nombre", { required: "required" })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <h2 style={{ marginTop: "10px", textAlign: "center" }}>
        Lista de compras
      </h2>
      <table
        className="table"
        style={{ textAlign: "center", marginTop: "40px" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {compra.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>
                <button
                  type="button"
                  ref={identi}
                  value={item.id}
                  className="btn btn-success"
                  onClick={(event) => {
                    console.log(identi.current.value);
                    dispath({ type: "sumar", payload: item.id });
                  }}
                >
                  +
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    dispath({ type: "restar", payload: item.id });
                  }}
                >
                  -
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    dispath({ type: "eliminar", payload: item.id });
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {console.log("soy la compra ", compra)}
      {console.log("soy el valor ", valor)}
    </div>
  );
}
