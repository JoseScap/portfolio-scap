import AboutSection from "@/components/home/about-section";
import ResumeSection from "@/components/home/resume-section";
import { fixedProfile } from "@/mock/profile.mock";
import { getProfileData } from "./utils";

export const revalidate = 86400

export default async function Home() {
  const { data, error } = await getProfileData()

  return (
    <>
      <AboutSection profile={error === null && !!data && data.length > 0 ? data[0] : fixedProfile}/>
      <ResumeSection />
    </>
  )
}
