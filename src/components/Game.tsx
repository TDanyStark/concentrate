import type { Perfiles, Perfil } from "@/data";
import { perfilesMujeres } from "@/data";
import { useState, useEffect } from "react";
import Card from "./Card";
import confetti from "canvas-confetti";
import executeAudio from "@/utils/executeAudio";
import useAudios from "@/hooks/useAudios";



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
  const [comparing, setComparing] = useState(false);
  const { confettiAudio, successEndAudio } = useAudios();

    // Reiniciar el juego
    const resetGame = () => {
      const shuffledCards = shuffleCards(perfilesMujeres);
      setCards(shuffledCards);
      setComparing(false);
    };

  const handleCardClick = (clickedCard: Perfil) => {
    // Si la carta ya está volteada o ya fue emparejada, no hacer nada
    if (clickedCard.flipped || clickedCard.matched || comparing) return;
    
    // voltear la carta
    const newCards = cards.map(card => {
      if (card.uniqueId === clickedCard.uniqueId) {
        return { ...card, flipped: true };
      }
      return card;
    });
    setCards(newCards);

    // Obtener las cartas volteadas
    const flippedCards = newCards.filter(card => card.flipped && !card.matched);

    // Si hay dos cartas volteadas, compararlas
    if (flippedCards.length === 2) {
      setComparing(true);
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.id === secondCard.id) {
        // Si las cartas coinciden, marcarlas como emparejadas
        const matchedCards = newCards.map(card => {
          if (card.id === firstCard.id) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(matchedCards);
        setComparing(false);
        // Lanzar confeti solo si todas las cartas están emparejadas
        if (matchedCards.every(card => card.matched)) {
          executeAudio(successEndAudio);
          executeAudio(confettiAudio);

          confetti({
            particleCount: 200,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 0.9 },
          });
          confetti({
            particleCount: 200,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 0.9 },
          });
          setTimeout(() => {
            resetGame();
          }, 3000);
        }

      } else {
        // Si las cartas no coinciden, voltearlas de nuevo después de un tiempo
        setTimeout(() => {
          const unflippedCards = newCards.map(card => {
            if (card.flipped && !card.matched) {
              return { ...card, flipped: false };
            }
            return card;
          });
          setCards(unflippedCards);
          setComparing(false);
        }, 1000);
      }
    }
  }
  
  return (
    <div className="flex flex-col items-center p-4 text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-[1400px] mx-auto">
        {cards.map((card) => (
          <Card key={card.uniqueId} {...card} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Game;