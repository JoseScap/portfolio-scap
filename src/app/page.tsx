import AboutSection from "@/components/home/about-section";
import ResumeSection from "@/components/home/resume-section";
import SkillSection from "@/components/home/skill-section";
import { fixedJourneys } from "@/mock/journeys.mock";
import { fixedProfile } from "@/mock/profile.mock";
import { fixedAllSkills, fixedFavSkills, fixedMaxYear } from "@/mock/skills.mock";
import { getJourneys, getProfile, getSkills } from "./utils";

export const revalidate = 600

export default async function Home() {
  const { data: profile, error: profileError } = await getProfile()
  const { data: journeys, error: journeyError } = await getJourneys()
  const { data: skills, error: skillError } = await getSkills()

  return (
    <>
      <AboutSection
        profile={
          profileError === null && !!profile && profile.length > 0
            ? profile[0]
            : fixedProfile
        }
      />
      <ResumeSection
        journeys={
          journeyError === null && !!journeys && journeys.length > 0
            ? journeys
            : fixedJourneys
        }
      />
      <SkillSection
        allSkills={fixedAllSkills}
        favSkills={fixedFavSkills}
        maxYear={fixedMaxYear}
      />
    </>
  )
}
