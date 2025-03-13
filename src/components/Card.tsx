import { URL_BASE } from "@/config";
import type { Perfil } from "@/data";

interface Props {
  id: number;
  img: string;
  nombre: string;
  edad: string;
  text: string;
  AOC: string;
  flipped?: boolean;
  uniqueId?: string;
  handleCardClick: (card: Perfil) => void;
}


const URL_IMGS = `${URL_BASE}/img/pacientes`;

const Card = ({
    id,
    img,
    nombre,
    edad,
    text,
    AOC,
    flipped,
    uniqueId,
    handleCardClick,
  }: Props) => {

  return (
    <div
      className="card w-full h-64 relative"
      onClick={() => handleCardClick({ id, img, nombre, edad, text, AOC, uniqueId, flipped })}
    >
      <div
        className={`card__content ${
          flipped ? "flipped" : ""
        } w-full h-full text-center relative p-20 transition-transform duration-1000`}
      >
        <div className="card__front rounded-4xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-rosa-abbott flex items-center justify-center">
          <h1 className="font-light text-4xl text-rosa-claro-abbott text-center">
            <span className="text-xl">CONCÉNTRATE EN</span>
            <span className="font-bold block">LAS MUJERES</span>
            <span className="font-bold block">PODEROSAS</span>
          </h1>
        </div>
        <div className="card__back rounded-4xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
