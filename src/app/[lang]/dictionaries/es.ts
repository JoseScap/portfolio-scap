import { favSkills, maxYear, nonFavSkills } from "@/data/skills.mock";
import { Dictionary } from "@/types/types";

const spanishDictionary: Dictionary = {
  header: {
    lang: 'es',
    brand: 'Josescap',
    customize: 'Personalizar',
    description: 'Aquí encontrarás todas las configuraciones del sitio para que se ajusten a tus gustos o puedas personalizarlas a tu manera.',
    colors: 'Colores',
    langs: 'Idiomas',
    close: 'Cerrar'
  },
  about: {
    lang: 'es',
    aboutMe: 'Acerca de Mi',
    alias: 'Josescap',
    description: 'Desarrollador Frontend con 4 años de experiencia. Experto en crear código robusto y escalable, con un fuerte énfasis en la mantenibilidad. Cuento con experiencia en el desarrollo e implementación de aplicaciones web y APIs RESTful. Busco con entusiasmo una oportunidad desafiante que enriquezca mi trayectoria profesional y me permita aportar un valor significativo.',
    fullnameLabel: 'Nombre',
    fullname: 'Jose Puente S.',
    ageLabel: 'Edad',
    age: '26',
    fromLabel: 'De',
    from: 'Tucumán, Argentina',
    emailLabel: 'E-Mail',
    email: 'juanpuentescapolatempo@gmail.com',
    seeMyResume: 'Mira mí CV',
    contactMe: 'Contactame',
  },
  journey: {
    lang: 'es',
    title: 'Mi trayectoría',
    journey: [
      {
        startYear: '2020',
        name: 'Educación',
        fav: true,
        JourneyItem: [
          {
            title: 'Ingenieria en Sistemas de Información',
            place: 'U. Tecnologica Nacional',
            startDate: '2021-04-10',
            endDate: null,
          },
          {
            title: 'Fullstack development',
            place: 'Soy Henry',
            startDate: '2020-04-10',
            endDate: '2020-12-10',
          }
        ]
      },
      {
        startYear: '2020',
        name: 'Experiencia',
        fav: true,
        JourneyItem: [
          {
            title: 'Frontend Engineer',
            place: 'Baufest & Banco Galicía',
            startDate: '2023-06-10',
            endDate: null,
          },
          {
            title: 'Fullstack & Frontend Developer',
            place: 'Vortex IT',
            startDate: '2021-07-10',
            endDate: '2023-05-10',
          },
          {
            title: 'Fullstack Developer',
            place: 'MSMT',
            startDate: '2020-02-10',
            endDate: '2021-06-10',
          },
        ]
      }
    ],
    current: 'Actualidad'
  },
  skills: {
    lang: 'es',
    title: 'Conocimientos tecnicos',
    year: 'Año',
    years: 'Años',
    nonFavSkills: nonFavSkills,
    favSkills: favSkills,
    maxYear: maxYear,
    moreSkills: 'Ver todas',
    lessSkills: 'Ver solo favoritas'
  },
  footer: {
    lang: 'es',
    madeWith: 'Hecho con',
    byJosescap: 'por Josescap'
  }
}

export default spanishDictionary