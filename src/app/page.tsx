import { journeyData } from "@/data/journeys.mock";
import { profileData } from "@/data/profile.mock";
import { allSortedSkills, favSkills, maxYear } from "@/data/skills.mock";
import AboutSection from "./components/About/about-section";
import ResumeSection from "./components/Resume/resume-section";
import SkillSection from "./components/Skill/skill-section";

export const revalidate = 600

export default async function Home() {
  return (
    <>
      <AboutSection profile={profileData} />
      <ResumeSection journeys={journeyData} />
      <SkillSection
        allSkills={allSortedSkills}
        favSkills={favSkills}
        maxYear={maxYear}
      />
    </>
  )
}
