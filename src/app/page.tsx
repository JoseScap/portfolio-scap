import AboutSection from "@/components/home/about-section";
import ResumeSection from "@/components/home/resume-section";
import SkillSection from "@/components/home/skill-section";
import { fixedJourneys } from "@/mock/journeys.mock";
import { fixedProfile } from "@/mock/profile.mock";
import { getJourneyData, getProfileData } from "./utils";

export const revalidate = 600

export default async function Home() {
  const { data: profileData, error: profileError } = await getProfileData()
  const { data: journeyData, error: journeyError } = await getJourneyData()

  return (
    <>
      <AboutSection
        profile={
          profileError === null && !!profileData && profileData.length > 0
            ? profileData[0]
            : fixedProfile
        }
      />
      <ResumeSection
        journeys={
          journeyError === null && !!journeyData && journeyData.length > 0
            ? journeyData
            : fixedJourneys
        }
      />
      <SkillSection />
    </>
  )
}
