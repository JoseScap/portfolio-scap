import AboutSection from "@/components/home/about-section";
import ResumeSection from "@/components/home/resume-section";
import { fixedJourneys } from "@/mock/journeys.mock";
import { fixedProfile } from "@/mock/profile.mock";
import { getJourneyData, getProfileData } from "./utils";

export const revalidate = 86400

export default async function Home() {
  const { data: profileData, error: profileError } = await getProfileData()
  const { data: journeyData, error: journeyError } = await getJourneyData()

  console.log(journeyData, journeyError)

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
    </>
  )
}
