import Collapsible from "@/components/custom-ui/collapsible";
import { Skill } from "@/types/types";
import SkillList from "./components/skill-list";

interface Props {
  nonFavSkills: Skill[]
  favSkills: Skill[]
  maxYear: number
}

export default function SkillSection({ nonFavSkills, favSkills, maxYear }: Props) {
  return (
    <section className="bg-background py-24 px-2">
      <div className="mb-6 lg:mb-16">
        <h2 className="uppercase text-2xl font-bold tracking-widest text-center">
          Conocimientos tecnicos
        </h2>
      </div>
      <SkillList skills={favSkills} maxYear={maxYear} />
      <Collapsible moreText="Ver todas" lessText="Ver solo favoritas" >
        {
          [
            <SkillList skills={nonFavSkills} maxYear={maxYear} key={1} />
          ]
        }
      </Collapsible>
    </section>
  )
}
