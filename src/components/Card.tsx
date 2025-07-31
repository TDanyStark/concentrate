import { URL_BASE } from "@/config";
import type { Perfil } from "@/data";

interface Props {
  id: number;
  img: string;
  nombre: string;
  edad: string;
  text: string;
  box: string;
  ref: string;
  flipped?: boolean;
  uniqueId?: string;
  handleCardClick: (card: Perfil) => void;
}

const URL_IMGS = `${URL_BASE}/img/pacientes`;
const URL_IMGS_BOX = `${URL_BASE}/img/brand_boxes`;

const Card = ({
  id,
  img,
  nombre,
  edad,
  text,
  box,
  ref,
  flipped,
  uniqueId,
  handleCardClick,
}: Props) => {
  return (
    <article
      className="card w-full h-64 relative cursor-pointer font-georgia select-none"
      onClick={() =>
        handleCardClick({ id, img, nombre, edad, text, box, ref, uniqueId, flipped })
      }
    >
      <div
        className={`card__content ${
          flipped ? "flipped" : ""
        } w-full h-full relative p-20 transition-transform duration-1000`}
      >
        <div className="card__front rounded-4xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-rosa-abbott flex items-center justify-center">
          <h1 className="font-light text-4xl text-rosa-claro-abbott text-center font-brandon">
            <span className="text-xl">CONCÉNTRATE EN</span>
            <span className="font-bold block">LAS MUJERES</span>
            <span className="font-bold block">PODEROSAS</span>
          </h1>
        </div>
        <div className="card__back rounded-4xl absolute overflow-hidden top-0 bottom-0 right-0 left-0 bg-morado-oscuro-abbott flex items-center justify-center">
          <div className="flex items-center h-full">
            <div className="w-[50%] h-full">
              <img
                src={`${URL_IMGS}/${img}.webp`}
                alt={nombre}
                className="w-full max-w-44 h-full object-cover object-top rounded-bl-2xl rounded-tl-2xl"
              />
            </div>
            <div className="p-3 w-[50%]">
              <h3 className="font-bold text-2xl leading-6 text-rosa-abbott">{nombre}</h3>
              <p className="text-2xl leading-6 text-rosa-abbott">{edad}</p>
              <p className="text-sm mt-1">{text}<sup className="text-xs">{ref}</sup></p>
              <div className="mt-4">
                <img src={`${URL_IMGS_BOX}/${box}.webp`} alt={nombre} className="h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
