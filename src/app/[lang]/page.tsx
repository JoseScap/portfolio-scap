import HeaderSection from "../components/Header/header-section"
import { DictionaryKind, getDictionary } from "./dictionaries"

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
  const { header } = await getDictionary(lang)

  return (
    <>
      <HeaderSection translations={header} />
      {/* <AboutSection lang={lang} /> */}
      {/* <ResumeSection journeys={journeyData} /> */}
      {/* <SkillSection
        nonFavSkills={nonFavSkills}
        favSkills={favSkills}
        maxYear={maxYear}
      /> */}
    </>
  )
}
