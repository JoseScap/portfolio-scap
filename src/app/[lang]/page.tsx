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

export default async function Home({ params: { lang } }: { params: { lang: DictionaryKind }}) {
  const { header } = await getDictionary(lang)
  console.log(lang, header)

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
