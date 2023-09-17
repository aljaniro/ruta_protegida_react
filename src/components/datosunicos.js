import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Datosunicos() {
  const id = useParams();

  const [anime, setanime] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const data = await fetch(`https://kitsu.io/api/edge/anime/${id.id}`);
      const datos = await data.json();
      setanime([datos.data]);
    };
    cargar();
  }, [id.id]);

  return (
    <div className="container">
      {console.log(anime)}
      <div
        className="animes"
        style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)" }}
      >
        {anime.map((item, index) => (
          <>
            <>
              {" "}
              <img
                src={item.attributes.posterImage.small}
                className="card-img-top"
                alt="..." style={{gridColumn:"1/6"}}
              />
            </>
            <div className="card" style={{ gridColumn:"6/13",background: "#870000", color: "white",border:"2PX solid #1C6EA4" }} key={index}>
              <div className="card-body">
                <h1 className="card-title">{item.attributes.slug}</h1>
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
                <li
                  className="list-group-item"
                  style={{ background: "#870000", color: "white" }}
                >
                  Edad Recomendad: {item.attributes.ageRatingGuide}
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default Datosunicos;
