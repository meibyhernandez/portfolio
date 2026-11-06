
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building modern web experiences.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    title: "3D & Real-time",
    description: "Creating immersive environments and assets.",
    skills: [
      "Unreal Engine 5",
      "Maya",
      "ZBrush",
      "Substance Painter",
      "Substance Designer",
      "Unity",
      "Niagara",
    ],
  },
  {
    title: "Design & Workflow",
    description: "Designing, testing and optimizing.",
    skills: [
      "Figma",
      "Git",
      "Vitest",
      "Storybook",
      "Blueprints",
      "Nanite",
      "Trim Sheets",
    ],
  },
];

const Tech = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Section heading */}
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
        02 / Expertise
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        Tools & Technologies
        <span className="text-[#B5A4DF]">.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#A5A7B1]">
        A selection of the technologies, tools,
        and workflows I use to bring ideas to life.
      </p>

      {/* Skill groups */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
            }}
            className="rounded-2xl border border-white/10 bg-[#14161E] p-7 transition-colors hover:border-[#B5A4DF]/40"
          >
            <span className="text-xs text-[#B5A4DF]">
              0{index + 1} / Skills
            </span>

            <h3 className="mt-5 text-xl font-semibold text-white">
              {group.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#9294A3]">
              {group.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#D2CFDA] transition-colors hover:border-[#B5A4DF]/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
