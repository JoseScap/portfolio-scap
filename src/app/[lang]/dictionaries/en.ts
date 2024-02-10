import { Dictionary } from "@/types/types";

const englishDictionary: Dictionary = {
  header: {
    brand: 'Josescap',
    customize: 'Customize'
  },
  about: {
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
    ]
  }
}

export default englishDictionary