'use client'

import { Skill } from "@/types/types";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import SkillProgress from "./skill-progress";

interface Props {
  allSkills: Skill[]
  favSkills: Skill[]
  maxYear: number
}

export default function SkillSection({ allSkills, favSkills, maxYear }: Props) {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => setShowMore(prev => !prev)

  return (
    <section className="bg-background py-24 px-2">
      <div className="mb-6 lg:mb-16">
        <h2 className="uppercase text-2xl font-bold tracking-widest text-center">
          Conocimientos tecnicos
        </h2>
      </div>
      <div className="max-w-5xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mb-8">
        {
          showMore
            ? allSkills.map((skill, idx) => (
              <SkillProgress key={idx} {...skill} max={maxYear} />
            ))
            : favSkills.map((skill, idx) => (
              <SkillProgress key={idx} {...skill} max={maxYear} />
            ))
        }
      </div>
      <div className="max-w-5xl mx-auto w-11/12 flex justify-center">
        <Button variant={'outline-primary'} onClick={handleShowMore}>{!showMore ? 'Ver todas' : 'Ver solo favoritas'}</Button>
      </div>
    </section>
  )
}
