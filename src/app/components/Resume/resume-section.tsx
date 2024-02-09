import { Journey } from "@/types/types";
import MyJourney from "./my-journey";

interface Props {
  journeys: Journey[]
}

export default function ResumeSection({ journeys }: Props) {
  return (
    <section className="bg-neutral-900 py-12 px-2">
      <div className="mb-6 lg:mb-16">
        <h2 className="uppercase text-2xl font-bold tracking-widest text-center">
          Mi trayectoría
        </h2>
      </div>
      <div className="max-w-5xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2">
        {
          journeys.map(({ name, startYear, JourneyItem }, idx) => <MyJourney
            key={idx}
            title={name}
            journeys={JourneyItem ?? []}
            startJourney={startYear}
          />)
        }
      </div>
    </section>
  )
}
