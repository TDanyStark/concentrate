import { URL_BASE } from "@/config";
import type { Perfil, Perfiles } from "@/data";
import {perfilesMujeres} from "@/data";
import { useState } from "react";


const URL_IMGS = `${URL_BASE}/img/pacientes`;

const Game = () => {
  const [data, setData] = useState<Perfiles>(perfilesMujeres);
  return (
    <div>
      {
        data.map((item: Perfil) => (
          <div key={item.id}>
            <img src={`${URL_IMGS}/${item.img}.webp`} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>{item.edad}</p>
            <p>{item.text}</p>
            <p>{item.AOC}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Game;
