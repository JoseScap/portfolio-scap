import { Progress } from "@/components/ui/progress";
import { Skill } from "@/types/types";

interface Props extends Skill {
  max: number
  yearLabel: string
  yearsLabel: string
}

export default function SkillProgress({ title, years, yearLabel, yearsLabel, max }: Props) {
  return (
    <div className=" flex flex-col gap-1">
      <div className="flex justify-between">
        <h4 className="flex gap-1">
          {title}
        </h4>
        <p>{years} {years > 1 ? yearsLabel : yearLabel}</p>
      </div>
      <div>
        <Progress value={years * 100 / max} aria-label={`${title} Bar Progress`} />
      </div>
    </div>
  )
}
