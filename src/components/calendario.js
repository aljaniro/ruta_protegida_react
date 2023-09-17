
import React, { useReducer } from "react";

export default function Fechas() {
  const date = new Date();
  const mes = date.getMonth();
  const año = date.getFullYear();
  const dia = date.getDate();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const init = {
    year: año,
    month: mes,
    day: dia,
  };

  const reducer = (state, action) => {
    let d = state.day;
    let m = state.month;
    let y = state.year;
   
    switch (action.type) {
      case "diaMas":
        if (d === 31) {
          d = 1;
          m = m + 1;
        } else {
          d = d + 1;
        }

        break;

      case "diaMenos":
        if (d === 1) {
          d = 31;
          m = m - 1;
        } else {
          d = d - 1;
        }

        break;

      case "mesMas":
        if (m === 11) {
          m = 0;
          y = y + 1;
        } else {
          m = m + 1;
        }
        break;

      case "mesMenos":
        if (m === 0) {
          m = 11;
          y = y - 1;
        } else {
          m = m - 1;
        }
        break;

      case "yearMas":
        y = y + 1;
        break;

      case "yearMenos":
        y = y - 1;
        break;
      default:
      // do nothing
    }
    return { day: d, month: m, year: y };
  };

  const [fecha, dispath] = useReducer(reducer, init);
  return (
    <div
      className="container"
      style={{
        marginTop: "30px",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        color: "goldenrod",
      }}
    >
      <h1>Fecha</h1>

      <h2>
        {fecha.day} - {meses[fecha.month]} - {fecha.year}
      </h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Dia</th>
            <th scope="col">Mes</th>
            <th scope="col">Año</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  dispath({ type: "diaMas" });
                }}
              >
                +
              </button>

              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  dispath({ type: "diaMenos" });
                }}
              >
                -
              </button>
            </th>
            <td>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  dispath({ type: "mesMas" });
                }}
              >
                +
              </button>

              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  dispath({ type: "mesMenos" });
                }}
              >
                -
              </button>
            </td>
            <td>
              {" "}
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  dispath({ type: "yearMas" });
                }}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  dispath({ type: "yearMenos" });
                }}
              >
                -
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
