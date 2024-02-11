import { getDictionary } from "./[lang]/dictionaries";
import AboutSection from "./components/About/about-section";
import HeaderSection from "./components/Header/header-section";
import ResumeSection from "./components/Resume/resume-section";
import SkillSection from "./components/Skill/skill-section";

export default async function Home() {
  const { header, about, journey, skills } = await getDictionary()

  return (
    <>
      <HeaderSection translations={header} />
      <AboutSection translations={about} />
      <ResumeSection translations={journey} />
      <SkillSection translations={skills} />
    </>
  )
}
