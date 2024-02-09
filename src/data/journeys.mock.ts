import { Journey } from "@/types/types";

export const journeyData: Journey[] = [
  {
    startYear: '2020',
    name: 'Educación',
    fav: true,
    JourneyItem: [
      {
        title: 'Ingenieria en Sistemas',
        place: 'U. Tecnologica Nacional',
        startDate: '2021-04-10',
        endDate: null,
      },
      {
        title: 'Fullstack development',
        place: 'Soy Henry',
        startDate: '2020-04-10',
        endDate: '2020-12-10',
      }
    ]
  },
  {
    startYear: '2020',
    name: 'Experiencia',
    fav: true,
    JourneyItem: [
      {
        title: 'Frontend Engineer',
        place: 'Baufest & Galicia Bank',
        startDate: '2023-06-10',
        endDate: null,
      },
      {
        title: 'Fullstack & Frontend Developer',
        place: 'Vortex IT',
        startDate: '2021-07-10',
        endDate: '2023-05-10',
      },
      {
        title: 'Fullstack Developer',
        place: 'MSMT',
        startDate: '2020-02-10',
        endDate: '2021-06-10',
      },
    ]
  }
]