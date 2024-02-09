import { Skill } from "@/types/types";

const mySkills: Skill[] = [
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

export const favSkills = mySkills.filter(s => s.fav)
export const nonFavSkills = mySkills.filter(s => !s.fav)
export const allSkills = [...favSkills, ...nonFavSkills]

export const maxYear = Math.max(...mySkills.map<number>(fs => fs.years))