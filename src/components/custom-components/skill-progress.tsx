import { Progress } from "../ui/progress";

interface Props {
  title: string
  years: number
  max: number
}

export default function SkillProgress({ title, years, max }: Props) {
  return (
    <div className=" flex flex-col gap-1">
      <div className="flex justify-between">
        <h5>{title}</h5>
        <p>{years} {years > 1 ? 'Años' : 'Año'}</p>
      </div>
      <div>
        <Progress value={years * 100 / max} />
      </div>
    </div>
  )
}
