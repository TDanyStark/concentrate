export type Perfil = {
  id: number;
  img: string;
  nombre: string;
  edad: string;
  text: string;
  box: string;
  ref: string;
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
    box: 'bellaface',
    ref: '4'
  },
  {
    id: 2,
    img: '/andrea',
    nombre: 'Andrea',
    edad: '22 años',
    text: 'Deportista, teme que su anticonceptivo afecte su peso corporal.',
    box: 'mia',
    ref: '1, 2'
  },
  {
    id: 3,
    img: '/manuela',
    nombre: 'Manuela',
    edad: '17 años',
    text: 'Necesidad anticonceptiva, acné y seborrea moderados.',
    box: 'bellaface',
    ref: '4'
  },
  {
    id: 4,
    img: '/paola',
    nombre: 'Paola',
    edad: '40 años',
    text: 'Síntomas físicos del trastorno disfórico premenstrual.',
    box: 'mia20'
    ,ref: '3'
  },
  {
    id: 5,
    img: '/monica',
    nombre: 'Mónica',
    edad: '33 años',
    text: 'Síntomas emocionales relacionados con el ciclo menstrual.',
    box: 'mia20'
    ,ref: '3'
  },
  {
    id: 6,
    img: '/alejandra',
    nombre: 'Alejandra',
    edad: '38 años',
    text: 'Dismenorrea e hirsutismo, sedentaria.',
    box: 'bellaface20'
    ,ref: '6'
  },
  {
    id: 7,
    img: '/diana',
    nombre: 'Diana',
    edad: '19 años',
    text: 'Se siente hinchada y pesada cerca de su período menstrual, acné hormonal.',
    box: 'mia'
    ,ref: '1, 2'
  },
  {
    id: 8,
    img: '/emilia',
    nombre: 'Emilia',
    edad: '35 años',
    text: 'Fumadora (menos de 15 cigarrillos al día), con seborrea y acné inflamatorio moderado.',
    box: 'bellaface20'
    ,ref: '5'
  }
];
