import { journeyData } from "@/data/journeys.mock";
import { profileData } from "@/data/profile.mock";
import { allSkills, favSkills, maxYear } from "@/data/skills.mock";
import AboutSection from "./components/About/about-section";
import Header from "./components/Header/header";
import ResumeSection from "./components/Resume/resume-section";
import SkillSection from "./components/Skill/skill-section";

export const revalidate = 600

export default async function Home() {
  return (
    <>
      <Header />
      <AboutSection profile={profileData} />
      <ResumeSection journeys={journeyData} />
      <SkillSection
        allSkills={allSkills}
        favSkills={favSkills}
        maxYear={maxYear}
      />
    </>
  )
}
