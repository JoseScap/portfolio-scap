import { Journey } from "@/types/types";
import MyJourney from "../ui/my-journey";

interface Props {
  journeys: Journey[]
}

export default function ResumeSection({ journeys }: Props) {
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
        {
          journeys.map(({ id, name, startYear, JourneyItem }) => <MyJourney
            key={id}
            title={name}
            journeys={JourneyItem ?? []}
            startJourney={startYear}
          />)
        }
        {/* <MyJourney title="Educación" journeyIcon="education" journeys={educations} startJourney="2020" />
        <MyJourney title="Experiencia" journeyIcon="experience" journeys={experiences} startJourney="2020" /> */}
      </div>
    </section>
  )
}
