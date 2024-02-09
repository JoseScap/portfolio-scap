import { Skill } from "@/types/types";
import SkillProgress from "./skill-progress";

interface Props {
  skills: Skill[]
  maxYear: number
}

export default function SkillList({ skills, maxYear }: Props) {
  return (
    <div className="max-w-5xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mb-8">
      {
        skills.map((skill, idx) => (
          <SkillProgress key={idx} {...skill} max={maxYear} />
        ))
      }
    </div>
  )
}
