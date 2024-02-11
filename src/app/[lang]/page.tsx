import AboutSection from "@/app/[lang]/components/About/about-section"
import FooterSection from "@/app/[lang]/components/Footer/footer-section"
import HeaderSection from "@/app/[lang]/components/Header/header-section"
import ResumeSection from "@/app/[lang]/components/Resume/resume-section"
import SkillSection from "@/app/[lang]/components/Skill/skill-section"
import { DictionaryKind, getDictionary, verifyLang } from "./dictionaries"

export const revalidate = 600

export async function generateStaticParams() {
  const langs: { lang: DictionaryKind }[] = [
    { lang: 'en' },
    { lang: 'es' }
  ]

  return langs
}

interface Props {
  params: {
    lang: DictionaryKind
  }
}

export default async function Home({ params: { lang } }: Props) {
  const { header, about, journey, skills, footer } = await getDictionary(verifyLang(lang))

  return (
    <>
      <HeaderSection translations={header} />
      <AboutSection translations={about} />
      <ResumeSection translations={journey} />
      <SkillSection translations={skills} />
      <FooterSection translations={footer} />
    </>
  )
}
