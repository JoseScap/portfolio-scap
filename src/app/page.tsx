import { getDictionary } from "./[lang]/dictionaries";
import AboutSection from "./components/About/about-section";
import HeaderSection from "./components/Header/header-section";

export default async function Home() {
  const { header, about } = await getDictionary()

  return (
    <>
      <HeaderSection translations={header} />
      <AboutSection translations={about} />
      {/* <ResumeSection journeys={journeyData} /> */}
      {/* <SkillSection
        nonFavSkills={nonFavSkills}
        favSkills={favSkills}
        maxYear={maxYear}
      /> */}
    </>
  )
}
