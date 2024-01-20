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
    <section className="bg-neutral-900 py-12 px-2">
      <div className="mb-6 lg:mb-16">
        <h3 className="uppercase text-md font-bold text-red-500 tracking-widest text-center">
          Mi curriculum
        </h3>
        <h2 className="text-2xl font-bold tracking-widest text-center">
          Mi trayectoría
        </h2>
      </div>
      <div className="max-w-5xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2">
        <MyJourney title="Educación" journeyIcon="education" journeys={educations} startJourney="2020" />
        <MyJourney title="Experiencia" journeyIcon="experience" journeys={experiences} startJourney="2020" />
      </div>
    </section>
  )
}
