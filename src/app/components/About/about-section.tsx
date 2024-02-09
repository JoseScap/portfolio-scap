import AboutImage from "@/assets/about.png";
import { Profile } from "@/types/types";
import { IconArrowUpRight, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import { buttonVariants } from "../../../components/ui/button";

interface Props {
  profile: Profile
}

export default async function AboutSection(
  { 
    profile:{
      age,
      alias,
      description,
      email,
      from,
      fullname
    }
  }: Props
) {
  return (
    <main className="bg-background min-h-screen px-2 max-w-7xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden w-full lg:flex lg:flex-col py-20 justify-center items-center">
        <Image src={AboutImage} alt="Juan Jose Puente Scapolatempo" className="w-full max-w-sm" />
      </div>
      <div className="flex flex-col py-20 gap-8 justify-center">
        <div>
          <h2 className="uppercase text-md font-bold text-primary tracking-widest">
            Acerca de Mi
          </h2>
          <h1 className="text-2xl font-bold tracking-widest">
            {alias}
          </h1>
          <p className="text-md text-stone-400">
            {description}
          </p>
        </div>
        <div>
          <div className="flex text-md text-wrap">
            <p className="w-24">Nombre</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {fullname}
            </p>
          </div>
          <div className="flex text-md">
            <p className="w-24">Edad</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {age}
            </p>
          </div>
          <div className="flex text-md">
            <p className="w-24">De</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {from}
            </p>
          </div>
          <div className="hidden sm:flex text-md">
            <p className="w-24">E-Mail</p>
            <span className="w-4">:</span>
            <p className="text-stone-400">
              {email}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a
            href="/FrontendEngineer-JuanJosePuenteScapolatempo.pdf"
            target="_blank"
            className={
              buttonVariants({ variant: 'default', className: 'cursor-pointer' })
            }
          >
            <IconArrowUpRight /> Mira mi CV
          </a>
          <a
            href="https://www.linkedin.com/in/josescap/"
            target="_blank"
            className={
              buttonVariants({ variant: 'outline-primary', className: 'cursor-pointer' })
            }
          >
            <IconBrandLinkedin /> Contactame
          </a>
        </div>
      </div>
    </main>
  )
}
