import { PropsWithTranslations } from "@/interfaces/interfaces"
import { formatJourneyDate } from "@/lib/utils"
import { JourneyDictionary, JourneyItem } from "@/types/types"
import { IconBulb, IconCalendar } from "@tabler/icons-react"

interface Props extends PropsWithTranslations<JourneyDictionary> {
  journeys: JourneyItem[]
  startJourney: string
  title: string
}

export default function MyJourney({ journeys, startJourney, title, translations: { current, lang } }: Props) {
  return (
    <div className="py-4">
      <div className="flex gap-2 mb-4">
        <span className="text-primary"><IconBulb /></span>
        <h4 className="uppercase text-xl font-bold">{title}</h4>
      </div>
      <div>
        {
          journeys.map(({title, place, startDate, endDate}, i) => <div key={i} className='relative ps-8 pb-10'>
            <div className="absolute top-3 left-2 h-full border-s-4 border-secondary"></div>
            <div className="absolute top-[6px] left-[2px] w-4 h-4 bg-background rounded-full border-4 border-primary"></div>
            <p className="text-lg font-bold">{title}</p>
            <p className="text-md text-primary mt-2">{place}</p>
            <p className="font-bold text-secondary-background flex gap-2 mt-2"><IconCalendar /> {formatJourneyDate(startDate, lang)} - {endDate ? formatJourneyDate(endDate, lang) : current}</p>
          </div>)
        }
        <div className={`relative ps-8 pb-4`}>
          <div className="absolute top-[6px] left-[2px] w-4 h-4 bg-background rounded-full border-4 border-primary"></div>
          <p className="font-bold flex gap-2">Start point <span className="text-primary">{startJourney ?? '...'}</span></p>
        </div>
      </div>
    </div>
  )
}
