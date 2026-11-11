
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const workInProgress = [
  {
    id: "elven-sanctuary",
    number: "01",
    title: "Elven Sanctuary",
    category: "Environment & Prop Art",
    description:
      "An ongoing fantasy environment project exploring elven architecture, detailed props, modular workflows and real-time production in Unreal Engine 5.",
    skills: [
      "Unreal Engine 5",
      "Maya",
      "ZBrush",
      "Substance 3D",
    ],
    focus: [
      "Modular architecture and environment design",
      "High-poly sculpting and game-ready assets",
      "PBR materials, lighting and scene composition",
    ],
    media: {
  type: "image",
  src: `${import.meta.env.BASE_URL}wip/elven-sanctuary.png`,
  alt: "Elven Sanctuary environment art in progress",
},
    initials: "ES",
    theme:
      "from-[#45355D] via-[#29243B] to-[#11131C]",
  },
  {
    id: "finscope",
    number: "02",
    title: "FinScope",
    category: "Frontend Development",
    description:
      "A personal finance web application focused on budgeting, reusable UI components, scalable frontend architecture and automated testing.",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "Vitest",
    ],
    focus: [
      "Budget categories and financial tracking",
      "Reusable components and design systems",
      "Frontend testing and application architecture",
    ],
    media: null,
    initials: "FS",
    theme:
      "from-[#294653] via-[#24303F] to-[#11131C]",
  },
];

const ProgressCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#14161E] transition-colors duration-300 hover:border-[#B5A4DF]/50"
    >
      {/* Project media */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1B1C29]">
        {project.media?.type === "image" ? (
          <img
            src={project.media.src}
            alt={project.media.alt || project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : project.media?.type === "video" ? (
          <video
            src={project.media.src}
            poster={project.media.poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={`relative flex h-full items-end overflow-hidden bg-gradient-to-br p-8 ${project.theme}`}
          >
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-12 select-none text-[150px] font-bold tracking-tighter text-white/5 sm:text-[200px]"
            >
              {project.initials}
            </span>

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Project in development
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {project.title}
              </h3>
            </div>
          </div>
        )}

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0B0D12]/75 px-4 py-2 text-xs text-white backdrop-blur-md">
          Work in Progress
        </span>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B5A4DF]">
          {project.number} / {project.category}
        </p>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#A5A7B1]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#C9C4D4]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Expandable progress details */}
        <details className="group/details mt-8 border-t border-white/10 pt-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[#D6C8F0] [&::-webkit-details-marker]:hidden">
            <span>View progress</span>
            <span
              aria-hidden="true"
              className="text-xl transition-transform duration-300 group-open/details:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="mt-6">
            <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[#9294A3]">
              Areas of development
            </p>

            <ul className="space-y-3">
              {project.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-[#B9BAC5]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B5A4DF]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </motion.article>
  );
};

const WorkInProgress = () => {
  return (
    <div className="mx-auto w-full max-w-7xl text-white">
      {/* Section heading */}
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
          Behind the Scenes / WIP
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Currently creating
          <span className="text-[#B5A4DF]">.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#A5A7B1]">
          A closer look at the projects, experiments
          and ideas I'm currently bringing to life.
          Exploring new techniques and refining
          both creative and technical workflows.
        </p>
      </div>

      {/* WIP project grid */}
      <div className="mt-14 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
        {workInProgress.map((project, index) => (
          <ProgressCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(WorkInProgress, "wip");
