import { IconBriefcase, IconBulb, IconCalendar, IconSchool } from "@tabler/icons-react"
import { useCallback } from "react"

interface Props {
    journeyIcon?: JourneyIcon
    journeys: Journey[]
    startJourney: string
    title: string
}

type JourneyIcon = keyof typeof journeyIcons

export type Journey = {
  title: string
  place: string
  startDate: string
  endDate?: string
}

export default function MyJourney({ journeyIcon = 'idea',journeys, startJourney, title   }: Props) {
  const Icon = useCallback(() => journeyIcons[journeyIcon], [journeyIcon])
  
  return (
    <div className="py-4">
      <div className="flex gap-2 mb-4">
        <span className="text-red-500"><Icon /></span>
        <h4 className="uppercase text-xl font-bold">{title}</h4>
      </div>
      <div>
        {
          journeys.map(({title, place, startDate, endDate}, i) => <div key={i} className='relative ps-8 pb-4'>
            <div className="absolute top-3 left-2 h-full border-s-4 border-red-500"></div>
            <div className="absolute top-[6px] left-[2px] w-4 h-4 bg-background rounded-full border-4 border-red-500"></div>
            <h5 className="text-lg font-bold">{title}</h5>
            <h6 className="text-md text-stone-400 mt-2">{place}</h6>
            <p className="font-bold text-red-500 flex gap-2 mt-4"><IconCalendar /> {startDate} - {endDate ?? 'Current'}</p>
          </div>)
        }
        <div className={`relative ps-8 pb-4`}>
            <div className="absolute top-[6px] left-[2px] w-4 h-4 bg-background rounded-full border-4 border-red-500"></div>
            <p className="font-bold flex gap-2">Start point <span className="text-red-500">{startJourney ?? '...'}</span></p>
          </div>
      </div>
    </div>
  )
}

const journeyIcons = {
  education: <IconSchool />,
  experience: <IconBriefcase />,
  idea: <IconBulb />
}