import { favSkills, maxYear, nonFavSkills } from "@/data/skills.mock";
import { Dictionary } from "@/types/types";

const englishDictionary: Dictionary = {
  header: {
    lang: 'en',
    brand: 'Josescap',
    homeLink: 'Home',
    blogLink: 'Blog',
    customize: 'Customize',
    description: 'Here you will find all the site settings, so you can tailor them to your preferences or have fun experimenting with them!',
    colors: 'Colors',
    langs: 'Languages',
    close: 'Close'
  },
  about: {
    lang: 'en',
    aboutMe: 'About me',
    alias: 'Josescap',
    description: 'Frontend Developer with 4 years of experience. Expert in creating robust and scalable code, with a strong emphasis on maintainability. I have experience in the development and implementation of web applications and RESTful APIs. I am eagerly seeking a challenging opportunity that will enrich my professional journey and allow me to contribute significant value.',
    fullnameLabel: 'Full name',
    fullname: 'Jose Puente S.',
    ageLabel: 'Age',
    age: '26',
    fromLabel: 'From',
    from: 'Tucumán, Argentina',
    emailLabel: 'E-Mail',
    email: 'juanpuentescapolatempo@gmail.com',
    seeMyResume: 'See my resume',
    contactMe: 'Contact me',
  },
  journey: {
    lang: 'en',
    title: 'My journey',
    journey: [
      {
        startYear: '2020',
        name: 'Education',
        fav: true,
        JourneyItem: [
          {
            title: 'Bachelor of Science in Information Systems',
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
        name: 'Experience',
        fav: true,
        JourneyItem: [
          {
            title: 'Frontend Engineer',
            place: 'Baufest & Galicia Bank',
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
    current: 'Current'
  },
  skills: {
    lang: 'en',
    title: 'Technical skills',
    year: 'Year',
    years: 'Years',
    nonFavSkills: nonFavSkills,
    favSkills: favSkills,
    maxYear: maxYear,
    moreSkills: 'See all',
    lessSkills: 'See just favourites'
  },
  footer: {
    lang: 'en',
    madeWith: 'Made with',
    byJosescap: 'by Josescap'
  }
}

export default englishDictionary