import MyJourney, { Journey } from "../ui/my-journey";

const educations: Journey[] = [
    {
        title: 'Bachelor in Computer Engineering',
        place: 'UTN - FRT',
        startDate: '2021'
    },
    {
        title: 'Fullstack Development',
        place: 'SoyHenry',
        startDate: '2020',
        endDate: '2020'
    }
]

const experiences: Journey[] = [
    {
        title: 'Frontend Engineer',
        place: 'Baufest & Galicia Bank',
        startDate: '2023 Jun',
    },
    {
        title: 'Fullstack & Frontend Developer',
        place: 'Vortex IT',
        startDate: '2021 Jun',
        endDate: '2023 May'
    },
    {
        title: 'Fullstack Developer',
        place: 'MSMT',
        startDate: '2020 Feb',
        endDate: '2021 Jun'
    }
]

export default function ResumeSection() {
  return (
    <section className="bg-background min-h-screen py-12 px-2 max-w-7xl mx-auto w-11/12 grid grid-cols-1">
      <MyJourney title="Education" journeyIcon="education" journeys={educations} startJourney="2020" />
      <MyJourney title="Experience" journeyIcon="experience" journeys={experiences} startJourney="2020" />
    </section>
  )
}
