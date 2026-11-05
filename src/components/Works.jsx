
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Available project categories
const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "UI/UX", value: "design" },
  { label: "3D Art", value: "3d" },
];

const categoryLabels = {
  frontend: "Frontend Development",
  design: "UI/UX Design",
  "3d": "3D Art",
};

// Reusable project card
const ProjectCard = ({
  name,
  description,
  image,
  tags = [],
  category,
  source_code_link,
  link_label = "View project",
}) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14161E] transition-colors hover:border-[#B5A4DF]/40"
    >
      {/* Project image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <img
          src={image}
          alt={`Preview of ${name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#B5A4DF]">
          {categoryLabels[category] || "Project"}
        </p>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#A5A7B1]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C1B9D4]"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* External project link */}
        {source_code_link && (
          <div className="mt-auto pt-7">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B5A4DF] transition-colors hover:text-white"
            >
              {link_label}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Display only projects matching the selected category
  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" ||
      project.category === activeFilter
  );

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Section heading */}
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
          Portfolio / Selected work
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Selected Work
          <span className="text-[#B5A4DF]">.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#A5A7B1]">
          A collection of digital experiences,
          interactive interfaces, and 3D environments
          I've worked on.
        </p>
      </div>

      {/* Category filters */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-3"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-[#B5A4DF] bg-[#B5A4DF] text-[#0B0D12]"
                  : "border-white/15 bg-white/5 text-[#A5A7B1] hover:border-white/40 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Responsive project grid */}
      <div className="mt-12 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
