import type { Perfil, Perfiles } from "@/data";

interface GameProps {
  data: Perfiles;
}

const Game = ({ data }: GameProps) => {
  return (
    <div>
      {
        data.map((item: Perfil) => (
          <div key={item.id}>
            <img src={item.img} alt={item.nombre} />
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
