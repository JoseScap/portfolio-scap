import { IconArrowUpRight, IconBrandLinkedin } from "@tabler/icons-react";
import { buttonVariants } from "../../../components/ui/button";

interface Props {
  lang?: string
}

export default async function AboutSection(
  { 
    lang = 'es'
  }: Props
) {
  const { default: { aboutSection } } = await import(`@/app/dictionaries/${lang}`)

  return (
    <main className="bg-background min-h-screen px-2 max-w-5xl mx-auto w-11/12 grid grid-cols-1">
      <div className="flex flex-col py-20 gap-8 justify-center">
        <div>
          <h2 className="uppercase text-md lg:text-lg lg:mb-2 font-bold text-primary tracking-widest">
            {aboutSection.aboutMe}
          </h2>
          <h1 className="text-2xl lg:text-3xl lg:mb-2 font-bold tracking-widest">
            {aboutSection.alias}
          </h1>
          <p className="text-md lg: text-lg text-stone-400">
            {aboutSection.description}
          </p>
        </div>
        <div>
          <div className="flex text-md lg:text-lg text-wrap">
            <p className="w-24">{aboutSection.fullnameLabel}</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {aboutSection.fullname}
            </p>
          </div>
          <div className="flex text-md lg:text-lg">
            <p className="w-24">{aboutSection.ageLabel}</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {aboutSection.age}
            </p>
          </div>
          <div className="flex text-md lg:text-lg">
            <p className="w-24">{aboutSection.fromLabel}</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {aboutSection.from}
            </p>
          </div>
          <div className="hidden sm:flex text-md lg:text-lg">
            <p className="w-24">{aboutSection.emailLabel}</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {aboutSection.email}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a
            href="/FrontendEngineer-JuanJosePuenteScapolatempo.pdf"
            target="_blank"
            className={
              buttonVariants({ variant: 'default', size: 'lg', className: 'cursor-pointer' })
            }
          >
            <IconArrowUpRight /> {aboutSection.seeMyResume}
          </a>
          <a
            href="https://www.linkedin.com/in/josescap/"
            target="_blank"
            className={
              buttonVariants({ variant: 'outline-primary', size: 'lg', className: 'cursor-pointer' })
            }
          >
            <IconBrandLinkedin /> {aboutSection.contactMe}
          </a>
        </div>
      </div>
    </main>
  )
}
