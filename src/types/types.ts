import { DictionaryKind } from "@/app/[lang]/dictionaries"

export type Dictionary = {
    header: HeaderDictionary
    about: AboutDictionary
    journey: JourneyDictionary
    skills: SkillDictionary
}

export type Lang = {
  lang: DictionaryKind
}

export type HeaderDictionary = Lang & {
    brand: string
    customize: string
    description: string
    colors: string
    langs: string
    close: string
}

export type AboutDictionary = Lang & {
    aboutMe: string,
    alias: string
    description: string
    fullnameLabel: string
    fullname: string
    ageLabel: string
    age: string
    fromLabel: string
    from: string
    emailLabel: string
    email: string
    seeMyResume: string
    contactMe: string
}

export type SkillDictionary = Lang & {
    title: string
    year: string
    years: string
    nonFavSkills: Skill[]
    favSkills: Skill[]
    maxYear: number
    moreSkills: string
    lessSkills: string
}

export type JourneyDictionary = Lang & {
    title: string
    journey: Journey[]
    current: string
}

export type Skill = {
    fav: boolean
    title: string
    years: number
}

export type Profile = {
    fullname:    string;
    alias:       string;
    description: string;
    age:         number;
    email:       string;
    from:        string;
}


export type Journey
 = {
    startYear:   string;
    name:        string;
    fav:         boolean;
    JourneyItem: JourneyItem[];
}

export type JourneyItem = {
    title:     string;
    place:     string;
    startDate: string;
    endDate:   string | null;
}
