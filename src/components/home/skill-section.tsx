'use client'

import { allSkills, favSkills, maxYearsForAll } from "@/mock/skills.mock";
import { useState } from "react";
import SkillProgress from "../custom-components/skill-progress";
import { Button } from "../ui/button";

export default function SkillSection() {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => setShowMore(prev => !prev)

  return (
    <section className="bg-background py-24 px-2">
      <div className="mb-6 lg:mb-16">
        <h3 className="uppercase text-md font-bold text-red-500 tracking-widest text-center">
          Mis skills
        </h3>
        <h2 className="text-2xl font-bold tracking-widest text-center">
          Mis favoritas
        </h2>
      </div>
      <div className="max-w-5xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mb-8">
        {
          showMore
            ? allSkills.map((s) => <SkillProgress key={s.id} {...s} max={maxYearsForAll} />)
            : favSkills.map((s) => <SkillProgress key={s.id} {...s} max={maxYearsForAll} />)
        }
      </div>
      <div className="max-w-5xl mx-auto w-11/12 flex justify-end">
        <Button variant={'default'} onClick={handleShowMore}>{!showMore ? 'Ver todas' : 'Ver solo favoritas'}</Button>
      </div>
    </section>
  )
}
