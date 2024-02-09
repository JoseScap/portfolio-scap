import { getDictionary } from "./[lang]/dictionaries";
import HeaderSection from "./components/Header/header-section";

export default async function Home() {
  const { header } = await getDictionary()

  return (
    <>
      <HeaderSection translations={header} />
      {/* <AboutSection /> */}
      {/* <ResumeSection journeys={journeyData} /> */}
      {/* <SkillSection
        nonFavSkills={nonFavSkills}
        favSkills={favSkills}
        maxYear={maxYear}
      /> */}
    </>
  )
}
