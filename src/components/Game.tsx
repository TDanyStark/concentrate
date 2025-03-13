import type { Perfiles, Perfil } from "@/data";
import { perfilesMujeres } from "@/data";
import { useState, useEffect } from "react";
import Card from "./Card";


// Función para duplicar y mezclar las cartas
const shuffleCards = (cards: Perfiles) => {
  // Crear dos copias de cada carta con diferentes IDs pero misma coincidencia
  const pairedCards = cards.flatMap(card => [
    { ...card, uniqueId: `${card.id}-1`, matched: false, flipped: card.flipped ?? false },
    { ...card, uniqueId: `${card.id}-2`, matched: false, flipped: card.flipped ?? false }
  ]);
  
  // Mezclar las cartas
  return pairedCards.sort(() => Math.random() - 0.5);
};

const Game = () => {
  const [cards, setCards] = useState<Perfiles>(shuffleCards(perfilesMujeres));

  const handleCardClick = (clickedCard: Perfil) => {
    // Si la carta ya está volteada o ya fue emparejada, no hacer nada
    // convertir flipped a true
    const newCards = cards.map(card => {
      if (card.uniqueId === clickedCard.uniqueId) {
        return { ...card, flipped: true };
      }
      return card;
    });
    setCards(newCards);

  }
  
  
  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-[1400px] mx-auto">
        {cards.map((card) => (
          <Card key={card.uniqueId} {...card} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Game;