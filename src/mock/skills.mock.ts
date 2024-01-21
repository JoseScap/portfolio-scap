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
  },
  {
    id: randomNumber(),
    fav: false,
    title: 'HTML',
    years: 4
  },
  {
    id: randomNumber(),
    fav: false,
    title: 'Git & Github/GitLab',
    years: 4
  },
  {
    id: randomNumber(),
    fav: false,
    title: 'Postman',
    years: 4
  },
  {
    id: randomNumber(),
    fav: false,
    title: 'NoSQL',
    years: 2
  },
  {
    id: randomNumber(),
    fav: false,
    title: 'MongoDB & Mongoose',
    years: 2
  },
  {
    id: randomNumber(),
    fav: false,
    title: 'Redux JS',
    years: 2
  },
]

export const favSkills = allSkills.filter(s => s.fav)
export const allOrderedSkills = [...allSkills].sort((a, b) => b.years - a.years)

export const maxYearsForAll = Math.max(...allSkills.map<number>(fs => fs.years))