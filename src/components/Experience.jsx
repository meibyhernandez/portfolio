
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";

const ExperienceCard = ({
  title,
  company_name,
  description,
  points = [],
  tags = [],
}) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#14161E] p-6 transition-colors duration-300 hover:border-[#B5A4DF]/40 sm:p-8">

      {/* Company */}
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#B5A4DF]">
        {company_name}
      </p>

      {/* Role */}
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-[#A5A7B1]">
        {description}
      </p>

      {/* Responsibilities */}
      <ul className="mt-6 space-y-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex gap-3 text-sm leading-6 text-[#A5A7B1]"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B5A4DF]"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C1B9D4]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">

      {/* Section title */}
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
          Background / Experience
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Professional Experience
          <span className="text-[#B5A4DF]">.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#A5A7B1]">
          My professional journey combines frontend
          development, interactive experiences, and
          real-time 3D production.
        </p>
      </div>

      {/* Experience cards */}
      <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company_name}-${experience.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.45,
              delay: (index % 2) * 0.08,
            }}
          >
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
