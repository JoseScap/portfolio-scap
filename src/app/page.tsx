import AboutSection from "@/components/home/about-section";
import ResumeSection from "@/components/home/resume-section";
import SkillSection from "@/components/home/skill-section";
import { journeyData } from "@/data/journeys.mock";
import { profileData } from "@/data/profile.mock";
import { allSortedSkills, favSkills, maxYear } from "@/data/skills.mock";

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
