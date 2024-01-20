import AboutImage from "@/assets/about.png";
import { fixedProfile } from "@/mock/profile.mock";
import supabase from "@/supabase/supabase";
import { IconArrowUpRight, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

export default async function AboutSection() {
  let { data, error } = await supabase
    .from('profile')
    .select('*')

  return (
    <main className="bg-background min-h-screen px-2 max-w-7xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full flex flex-col py-20 justify-center items-center">
        <Image src={AboutImage} alt="Juan Jose Puente Scapolatempo" className="w-full max-w-sm" />
      </div>
      <div className="flex flex-col py-20 gap-8 justify-center">
        <div>
          <h2 className="uppercase text-md font-bold text-red-500 tracking-widest">
            Acerca de Mi
          </h2>
          <h1 className="text-2xl font-bold tracking-widest">
            {error === null && data && data.length > 0 ? data[0].alias : fixedProfile.alias}
          </h1>
          <p className="text-md text-stone-400">
            Desarrollador Frontend con 4 años de experiencia. Experto en crear código robusto y escalable,
            con un fuerte énfasis en la mantenibilidad. Cuento con experiencia en el desarrollo e implementación
            de aplicaciones web y APIs RESTful. Busco con entusiasmo una oportunidad desafiante que enriquezca
            mi trayectoria profesional y me permita aportar un valor significativo.
          </p>
        </div>
        <div>
          <div className="flex text-md text-wrap">
            <p className="w-24">Nombre</p><span className="w-4">:</span><p className="text-stone-400">Juan Jose Puente S.</p>
          </div>
          <div className="flex text-md">
            <p className="w-24">Edad</p><span className="w-4">:</span><p className="text-stone-400">26</p>
          </div>
          <div className="flex text-md">
            <p className="w-24">De</p><span className="w-4">:</span><p className="text-stone-400">Argentina, Tucuman</p>
          </div>
          <div className="hidden sm:flex text-md">
            <p className="w-24">Mail</p><span className="w-4">:</span><p className="text-stone-400">juanpuentescapolatempo@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a
            href="https://www.linkedin.com/in/josescap/"
            target="_blank"
            className={
              buttonVariants({ variant: 'linkedin', className: 'cursor-pointer' })
            }
          >
            <IconBrandLinkedin /> Contactame
          </a>
          <a
            href="/FrontendEngineer-JuanJosePuenteScapolatempo.pdf"
            target="_blank"
            className={
              buttonVariants({ variant: 'resume', className: 'cursor-pointer' })
            }
          >
            <IconArrowUpRight /> Mira mi CV
          </a>
        </div>
      </div>
    </main>
  )
}
