import Collapsible from "@/components/custom-ui/collapsible";
import { PropsWithTranslations } from "@/interfaces/interfaces";
import { SkillDictionary } from "@/types/types";
import SkillList from "./components/skill-list";
import SkillProgress from "./components/skill-progress";

export default function SkillSection({
  translations: {
    title,
    year,
    years,
    nonFavSkills,
    favSkills,
    maxYear,
    moreSkills,
    lessSkills
  }
}: PropsWithTranslations<SkillDictionary>) {
  return (
    <section className="bg-background py-24 px-2">
      <div className="mb-6 lg:mb-16">
        <h2 className="uppercase text-2xl font-bold tracking-widest text-center">
          {title}
        </h2>
      </div>
      <SkillList >
        {
          favSkills.map((skill, idx) => (
            <SkillProgress key={idx} {...skill} max={maxYear} yearLabel={year} yearsLabel={years} />
          ))
        }
      </SkillList>
      <Collapsible moreText={moreSkills} lessText={lessSkills} >
        {
          [
            <SkillList key={1} >
              {
                nonFavSkills.map((skill, idx) => (
                  <SkillProgress key={idx} {...skill} max={maxYear} yearLabel={year} yearsLabel={years} />
                ))
              }
            </SkillList>
          ]
        }
      </Collapsible>
    </section>
  )
}
