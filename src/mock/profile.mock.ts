import { randomNumber } from "@/lib/utils";
import { Profile } from "@/types/types";

export const fixedProfile: Profile = {
  id: randomNumber(),
  fullname: 'Juan Jose Puente Scapolatempo',
  alias: 'Josescap',
  description: 'Desarrollador Frontend con 4 años de experiencia. Experto en crear código robusto y escalable, con un fuerte énfasis en la mantenibilidad. Cuento con experiencia en el desarrollo e implementación de aplicaciones web y APIs RESTful. Busco con entusiasmo una oportunidad desafiante que enriquezca mi trayectoria profesional y me permita aportar un valor significativo.',
  age: 26,
  email: 'juanpuentescapolatempo@gmail.com',
  from: 'Tucumán, Argentina'
}