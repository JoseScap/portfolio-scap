import { randomNumber } from "@/lib/utils";
import { Skill } from "@/types/types";

export const allSkills: Skill[] = [
  {
    id: randomNumber(),
    fav: true,
    title: 'React JS',
    years: 4
  },
  {
    id: randomNumber(),
    fav: true,
    title: 'JavaScript & Node JS',
    years: 4
  },
  {
    id: randomNumber(),
    fav: true,
    title: 'SQL',
    years: 4
  },
  {
    id: randomNumber(),
    fav: true,
    title: 'Next JS',
    years: 2
  },
  {
    id: randomNumber(),
    fav: true,
    title: 'Docker',
    years: 2
  },
  {
    id: randomNumber(),
    fav: true,
    title: 'Azure',
    years: 1
  }
]

export const maxYearsForAll = Math.max(...allSkills.map<number>(fs => fs.years))