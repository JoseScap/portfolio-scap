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
    },
]

export default function ResumeSection() {
  return (
    <section className="bg-background min-h-screen py-12 px-2 max-w-7xl mx-auto w-11/12 grid grid-cols-1">
      <MyJourney title="Education" journeyIcon="education" journeys={educations} />
    </section>
  )
}
