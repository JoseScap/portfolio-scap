import { PropsWithTranslations } from "@/interfaces/interfaces";
import { AboutDictionary } from "@/types/types";
import { IconArrowUpRight, IconBrandLinkedin } from "@tabler/icons-react";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "../../../components/ui/button";

export default async function AboutSection({
  translations
}: PropsWithTranslations<AboutDictionary>) {
  return (
    <main className="bg-background min-h-screen relative">
      <a href="#resume" className="absolute cursor-pointer hover:bg-primary/50 bottom-8 right-8 w-8 h-12 hover:rounded-lg pb-1 border-b-2 border-primary hover:border-primary/50 flex flex-col items-center justify-end transition-all">
        <ChevronDown className="animated-bounce" />
      </a>
      <div className="max-w-5xl w-11/12 mx-auto">
        <div className="flex flex-col pt-24 pb-20 lg:py-32 gap-8 justify-center">
          <div>
            <h2 className="uppercase text-md lg:text-lg lg:mb-2 font-bold text-primary tracking-widest">
              {translations.aboutMe}
            </h2>
            <h1 className="text-2xl lg:text-3xl lg:mb-2 font-bold tracking-widest">
              {translations.alias}
            </h1>
            <p className="text-md lg: text-lg text-stone-400">
              {translations.description}
            </p>
          </div>
          <div>
            <div className="flex text-md lg:text-lg text-wrap">
              <p className="w-24">{translations.fullnameLabel}</p>
              <span className="w-4">:</span>
              <p className="text-stone-400">
                {translations.fullname}
              </p>
            </div>
            <div className="flex text-md lg:text-lg">
              <p className="w-24">{translations.ageLabel}</p>
              <span className="w-4">:</span>
              <p className="text-stone-400">
                {translations.age}
              </p>
            </div>
            <div className="flex text-md lg:text-lg">
              <p className="w-24">{translations.fromLabel}</p>
              <span className="w-4">:</span>
              <p className="text-stone-400">
                {translations.from}
              </p>
            </div>
            <div className="hidden sm:flex text-md lg:text-lg">
              <p className="w-24">{translations.emailLabel}</p>
              <span className="w-4">:</span>
              <p className="text-stone-400">
                {translations.email}
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
              <IconArrowUpRight /> {translations.seeMyResume}
            </a>
            <a
              href="https://www.linkedin.com/in/josescap/"
              target="_blank"
              className={
                buttonVariants({ variant: 'outline-primary', size: 'lg', className: 'cursor-pointer' })
              }
            >
              <IconBrandLinkedin /> {translations.contactMe}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
