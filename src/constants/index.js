import {
  mobile,
  backend,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  foody,
  cyberpunk,
  car,
  god,
  snow,
  lamp,
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
    title: "Environment Artist",
    company_name: "Psiontech — SoulShards",
    description:
      "Creating real-time environments and assets for a game developed in Unreal Engine 5.",
    points: [
      "Created modular environments, props, and architectural assets.",
      "Worked with trim sheets, texture baking, foliage, and set dressing.",
      "Optimized assets using LODs, Nanite, and instancing techniques.",
    ],
    tags: ["Unreal Engine 5", "Maya", "Substance 3D", "ZBrush"],
  },
  {
    title: "Frontend Developer",
    company_name: "Endless Adventures",
    description:
      "Developed web interfaces and worked on integrations between web technologies and interactive applications.",
    points: [
      "Built frontend interfaces using React.",
      "Worked with PlayFab and Unity-to-web integrations.",
      "Collaborated on UI implementation and design.",
    ],
    tags: ["React", "JavaScript", "PlayFab", "Figma"],
  },
  {
    title: "3D Artist & Unity Developer",
    company_name: "WayTic",
    description:
      "Created interactive applications and 3D content for mobile and desktop experiences.",
    points: [
      "Modeled and animated 3D assets.",
      "Developed interactive applications using Unity.",
      "Integrated visual assets into real-time projects.",
    ],
    tags: ["Unity", "3D Modeling", "Animation"],
  },
  {
    title: "Frontend & UI/UX Developer",
    company_name: "Universidad de Caldas",
    description:
      "Worked on frontend development, interface design, and augmented reality experiences.",
    points: [
      "Developed user interfaces for digital applications.",
      "Worked on UI/UX design and interactive prototypes.",
      "Participated in augmented reality projects using Vuforia.",
    ],
    tags: ["Frontend", "UI/UX", "Vuforia"],
  },
  {
    title: "Frontend Developer",
    company_name: "Colciencias",
    description:
      "Contributed to the development of web applications.",
    points: [
      "Implemented frontend features using Angular.",
      "Worked on application interfaces and functionality.",
    ],
    tags: ["Angular", "JavaScript", "Frontend"],
  },
  {
    title: "Frontend Developer",
    company_name: "Newshore",
    description:
      "Worked on frontend development using Angular.",
    points: [
      "Contributed to web application interfaces.",
      "Worked with Angular-based frontend components.",
    ],
    tags: ["Angular", "Frontend"],
  },
];


const projects = [
  {
    name: "Geritch restaurant",
     category: "frontend",
  link_label: "Live demo",
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
     category: "frontend",
  link_label: "Live demo",
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
    name: "Scene Flow",
     category: "frontend",
     featured: true,
  link_label: "Live demo",
    description:
      "Track tasks, organize visual assets, and keep project progress visible without losing focus on the work itself.",
    tags: [
      {
        name: "Tawilwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sceneflow-5ema.vercel.app/",
  },
  {
    name: "Foody app",
    category: "design",
  link_label: "View case study",
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
    category: "3d",
    
  link_label: "View on Artstation",
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
    category: "3d",
  link_label: "View on Artstation",
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
  {
    name: "God Ray",
    category: "3d",
  link_label: "View on Artstation",
    description:
      "A stunning god ray effect created using Unreal Engine 5 and the Niagara system.",
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
        name: "Lighting",
        color: "pink-text-gradient",
      },
    ],
    image: god,
    source_code_link: "https://www.artstation.com/artwork/kl0396",
  },
  {
    name: "Snowy Mountain",
    category: "3d",
  link_label: "View on Artstation",
    description:
      "A beautiful snowy mountain scene created using Unreal Engine 5 and the Niagara system.",
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
        name: "Environment",
        color: "pink-text-gradient",
      },
       {
        name: "Set Dressing",
        color: "pink-text-gradient",
      },
    ],
    image: snow,
    source_code_link: "https://www.artstation.com/artwork/14ekBq",
  },
  {
    name: "Elven Lamp",
    category: "3d",
    featured: true,
  link_label: "View on Artstation",
    description:
      "A mystical elven lamp designed for a fantasy setting.",
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
        name: "Maya",
        color: "pink-text-gradient",
      },
       {
        name: "Zbrush",
        color: "pink-text-gradient",
      },
       {
        name: "UV Mapping",
        color: "pink-text-gradient",
      },
    ],
    image: lamp,
    source_code_link: "https://www.artstation.com/artwork/RqLEBy",
  }
];

export { services, technologies, experiences, projects };
