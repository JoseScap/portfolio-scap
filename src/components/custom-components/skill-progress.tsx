import { Skill } from "@/types/types";
import { IconStar, IconStarOff } from "@tabler/icons-react";
import { Progress } from "../ui/progress";


interface Props extends Skill {
  max: number
}

export default function SkillProgress({ title, years, fav, max }: Props) {
  return (
    <div className=" flex flex-col gap-1">
      <div className="flex justify-between">
        <h5 className="flex gap-1">
          <span className="text-primary">
            {fav ? <IconStar /> : <IconStarOff />}
          </span> {title}
        </h5>
        <p>{years} {years > 1 ? 'Años' : 'Año'}</p>
      </div>
      <div>
        <Progress value={years * 100 / max} />
      </div>
    </div>
  )
}
