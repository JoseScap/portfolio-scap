import AboutSection from "@/components/home/about-section";
import ResumeSection from "@/components/home/resume-section";
import SkillSection from "@/components/home/skill-section";
import { fixedJourneys } from "@/mock/journeys.mock";
import { fixedProfile } from "@/mock/profile.mock";
import { fixedAllSkills, fixedFavSkills, fixedMaxYear } from "@/mock/skills.mock";
import { getFavSkills, getJourneys, getProfile, getSkills } from "./utils";

export const revalidate = 600

export default async function Home() {
  const { data: profile, error: profileError } = await getProfile()
  const { data: journeys, error: journeyError } = await getJourneys()
  const { data: skills, error: skillError } = await getSkills()
  const { data: favSkills, error: favSkillError } = await getFavSkills()

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
        allSkills={
          skillError === null && !!skills && skills.length > 0
            ? skills
            : fixedAllSkills
        }
        favSkills={
          favSkillError === null && !!favSkills && favSkills.length > 0
            ? favSkills
            : fixedFavSkills
        }
        maxYear={
          skillError === null && !!skills && skills.length > 0
            ? skills[0].years
            : fixedMaxYear
        }
      />
    </>
  )
}
