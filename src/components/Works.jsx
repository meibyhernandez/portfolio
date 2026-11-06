
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "UI/UX", value: "design" },
  { label: "3D Art", value: "3d" },
];

const categoryLabels = {
  frontend: "Frontend Development",
  design: "UI/UX Design",
  "3d": "3D Environment & Prop Art",
};

const ProjectCard = ({ project, featured = false }) => {
  const {
    name,
    description,
    image,
    category,
    tags = [],
    source_code_link,
    link_label = "Explore project",
  } = project;

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#14161E] transition-all duration-300 hover:border-[#B5A4DF]/50 ${
        featured
          ? "lg:grid lg:grid-cols-[1.5fr_1fr]"
          : "flex h-full flex-col"
      }`}
    >
      {/* Project image */}
      <div
        className={`relative overflow-hidden bg-white/5 ${
          featured
            ? "aspect-[16/10] lg:aspect-auto lg:min-h-[390px]"
            : "aspect-[16/10]"
        }`}
      >
        <img
          src={image}
          alt={`Preview of ${name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {featured && (
          <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
            Featured Project
          </span>
        )}
      </div>

      {/* Project content */}
      <div
        className={`flex flex-1 flex-col ${
          featured
            ? "justify-center p-7 sm:p-10"
            : "p-6 sm:p-7"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-[#B5A4DF]">
          {categoryLabels[category] || "Creative Project"}
        </p>

        <h3
          className={`mt-4 font-semibold tracking-tight text-white ${
            featured
              ? "text-3xl sm:text-4xl"
              : "text-2xl"
          }`}
        >
          {name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#A5A7B1]">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#C1B9D4]"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {source_code_link && (
          <div className="mt-auto pt-8">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D6C8F0] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5A4DF]"
            >
              {link_label}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" ||
      project.category === activeFilter
  );

  // Choose the featured project for the selected category
  const featuredProject =
    visibleProjects.find((project) => project.featured) ??
    visibleProjects[0];

  // Avoid rendering the featured project twice
  const remainingProjects = visibleProjects.filter(
    (project) => project !== featuredProject
  );

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
          Portfolio / Selected Work
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Selected Work
          <span className="text-[#B5A4DF]">.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#A5A7B1]">
          A selection of my work in frontend development,
          interactive experiences, and real-time 3D art.
        </p>
      </motion.div>

      {/* Filters */}
      <div
        role="group"
        aria-label="Filter projects"
        className="mt-10 flex flex-wrap gap-3"
      >
        {filters.map((filter) => {
          const selected = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                selected
                  ? "border-[#B5A4DF] bg-[#B5A4DF] text-[#0B0D12]"
                  : "border-white/15 bg-white/5 text-[#A5A7B1] hover:border-white/40 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Featured project */}
      <div className="mt-12">
        {featuredProject && (
          <ProjectCard
            key={featuredProject.name}
            project={featuredProject}
            featured
          />
        )}
      </div>

      {/* Remaining projects */}
      <div className="mt-7 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2">
        {remainingProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
