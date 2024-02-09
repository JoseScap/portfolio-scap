import { Skill } from "@/types/types";

const allSkills: Skill[] = [
  {
    fav: true,
    title: 'React JS',
    years: 4
  },
  {
    fav: true,
    title: 'JavaScript & Node JS',
    years: 4
  },
  {
    fav: true,
    title: 'SQL',
    years: 4
  },
  {
    fav: true,
    title: 'Next JS',
    years: 2
  },
  {
    fav: true,
    title: 'Docker',
    years: 2
  },
  {
    fav: true,
    title: 'Azure',
    years: 1
  },
  {
    fav: false,
    title: 'HTML',
    years: 4
  },
  {
    fav: false,
    title: 'Git & Github/GitLab',
    years: 4
  },
  {
    fav: false,
    title: 'Postman',
    years: 4
  },
  {
    fav: false,
    title: 'NoSQL',
    years: 2
  },
  {
    fav: false,
    title: 'MongoDB & Mongoose',
    years: 2
  },
  {
    fav: false,
    title: 'Redux JS',
    years: 2
  },
]

export const favSkills = allSkills.filter(s => s.fav)
export const allSortedSkills = [...allSkills].sort((a, b) => b.years - a.years)

export const maxYear = Math.max(...allSkills.map<number>(fs => fs.years))