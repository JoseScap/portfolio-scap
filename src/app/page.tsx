import AboutImage from "@/assets/about.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background min-h-screen p-12 max-w-5xl mx-auto w-11/12 gap-6 grid grid-cols-3 grid-rows-1">
      <div className="flex flex-col justify-center">
        <Image src={AboutImage} alt="Juan Jose Puente Scapolatempo" className="w-full" />
      </div>
      <div className="flex flex-col gap-8 col-span-2 flex flex-col justify-center pb-32">
        <div>
          <h2 className="uppercase text-sm text-red-500 tracking-widest">
            My intro
          </h2>
          <h1 className="text-xl font-bold tracking-widest">
            Acerca de mi
          </h1>
          <p className="text-xs text-stone-400">
            Desarrollador Frontend con 4 años de experiencia. Experto en crear código robusto y escalable,
            con un fuerte énfasis en la mantenibilidad. Cuento con experiencia en el desarrollo e implementación
            de aplicaciones web y APIs RESTful. Busco con entusiasmo una oportunidad desafiante que enriquezca
            mi trayectoria profesional y me permita aportar un valor significativo.
          </p>
        </div>
        <div>
          <div className="flex text-xs">
            <p className="w-24">Nombre</p><span className="w-4">:</span><p className="text-stone-400">Juan Jose Puente Scapolatempo</p>
          </div>
          <div className="flex text-xs">
            <p className="w-24">Edad</p><span className="w-4">:</span><p className="text-stone-400">26</p>
          </div>
          <div className="flex text-xs">
            <p className="w-24">De</p><span className="w-4">:</span><p className="text-stone-400">Argentina, Tucuman</p>
          </div>
          <div className="flex text-xs">
            <p className="w-24">Email</p><span className="w-4">:</span><p className="text-stone-400">juanpuentescapolatempo@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}
