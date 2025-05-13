export type Perfil = {
  id: number;
  img: string;
  nombre: string;
  edad: string;
  text: string;
  box: string;
  uniqueId?: string;
  matched?: boolean;
  flipped?: boolean;
};

export type Perfiles = Perfil[];

export const perfilesMujeres = [
  {
    id: 1,
    img: '/bianca',
    nombre: 'Bianca',
    edad: '29 años',
    text: 'Ciclos irregulares, dismenorrea severa.',
    box: 'bellaface'
  },
  {
    id: 2,
    img: '/andrea',
    nombre: 'Andrea',
    edad: '22 años',
    text: 'Deportista, teme que su anticonceptivo afecte su peso corporal.',
    box: 'mia'
  },
  {
    id: 3,
    img: '/manuela',
    nombre: 'Manuela',
    edad: '17 años',
    text: 'Necesidad anticonceptiva, acné y seborrea moderados.',
    box: 'bellaface'
  },
  {
    id: 4,
    img: '/paola',
    nombre: 'Paola',
    edad: '40 años',
    text: 'Síntomas físicos del síndrome premenstrual.',
    box: 'mia20'
  },
  {
    id: 5,
    img: '/monica',
    nombre: 'Mónica',
    edad: '33 años',
    text: 'Síntomas emocionales relacionados con el ciclo menstrual.',
    box: 'mia20'
  },
  {
    id: 6,
    img: '/alejandra',
    nombre: 'Alejandra',
    edad: '38 años',
    text: 'Dismenorrea y sangrado menstrual abundante, sedentaria.',
    box: 'bellaface20'
  },
  {
    id: 7,
    img: '/diana',
    nombre: 'Diana',
    edad: '19 años',
    text: 'Se siente hinchada y pesada cerca de su período menstrual, acné hormonal.',
    box: 'mia'
  },
  {
    id: 8,
    img: '/emilia',
    nombre: 'Emilia',
    edad: '35 años',
    text: 'Fumadora (menos de 15 cigarrillos al día), sangrados menstruales prolongados.',
    box: 'bellaface20'
  }
];
