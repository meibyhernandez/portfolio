import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  foody,
  cyberpunk,
  car,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "3D Modeler",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Geritch restaurant",
    description:
      "Website created for a famous restaurant in the center of Madrid. It showcase the most famous dishes, cocktails...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://meibyhernandez.github.io/restaturant/",
  },
  {
    name: "Video Player",
    description:
      "Web application that enables users to search for videos, divided on different categories like coding, comedy, music, among others...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://meibyhernandez.github.io/videoSearcher/",
  },
  {
    name: "Meditation app",
    description:
      "Web based application designed to help users meditate with rain or ocean sounds. Includes a timer.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/meibyhernandez/apptut_meditation",
  },
  {
    name: "Foody app",
    description:
      "Foody tracky is a mobile application designed to improve times and sales of meals in amusements parks. Allowing costumers get easier the food without losing time waiting in a line.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "user Experience",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "pink-text-gradient",
      },
    ],
    image: foody,
    source_code_link: "https://uxfol.io/p/38f4be64/036b35cb",
  },
  {
    name: "UE - Futuristic Scenery",
    description:
      "Show the composition and the lighting in a futuristic city scene. Using the unreal engine 5 and the niagara system to create some dust particles, with the help of assets provided by leartes studio.",
    tags: [
      {
        name: "UE5",
        color: "blue-text-gradient",
      },
      {
        name: "Particles",
        color: "green-text-gradient",
      },
      {
        name: "Composition",
        color: "pink-text-gradient",
      },
    ],
    image: cyberpunk,
    source_code_link: "https://www.artstation.com/artwork/NGV4Pd",
  },
  {
    name: "Mini Cooper",
    description:
      "Seeing this mini cooper makes me think of how things that were once important are abandoned and forgotten 🤓 Textured with substance painter and the environment with UE 5 with quixel megascans..",
    tags: [
      {
        name: "UE5",
        color: "blue-text-gradient",
      },
      {
        name: "Substance painter",
        color: "green-text-gradient",
      },
      {
        name: "Quixel",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://www.artstation.com/artwork/8wARxQ",
  },
];

export { services, technologies, experiences, projects };
