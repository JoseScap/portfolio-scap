import { randomNumber } from "@/lib/utils";
import { Journey } from "@/types/types";

export const fixedJourneys: Journey[] = [
  {
    id: randomNumber(),
    startYear: '2020',
    name: 'Educación',
    fav: true,
    JourneyItem: [
      {
        id: randomNumber(),
        title: 'Ingenieria en Sistemas',
        place: 'U. Tecnologica Nacional',
        startDate: '2021-04-10',
        endDate: null,
      },
      {
        id: randomNumber(),
        title: 'Fullstack development',
        place: 'Soy Henry',
        startDate: '2020-04-10',
        endDate: '2020-12-10',
      }
    ]
  },
  {
    id: randomNumber(),
    startYear: '2020',
    name: 'Experiencia',
    fav: true,
    JourneyItem: [
      {
        id: randomNumber(),
        title: 'Frontend Engineer',
        place: 'Baufest & Galicia Bank',
        startDate: '2023-06-10',
        endDate: null,
      },
      {
        id: randomNumber(),
        title: 'Fullstack & Frontend Developer',
        place: 'Vortex IT',
        startDate: '2021-07-10',
        endDate: '2023-05-10',
      },
      {
        id: randomNumber(),
        title: 'Fullstack Developer',
        place: 'MSMT',
        startDate: '2020-02-10',
        endDate: '2021-06-10',
      },
    ]
  }
]