
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const specializations = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible and interactive web applications using React, TypeScript, Angular and modern frontend technologies.",
  },
  {
    number: "02",
    title: "Environment & Prop Art",
    description:
      "Creating modular environments, detailed props and immersive game worlds using Unreal Engine 5, Maya, ZBrush and Substance 3D.",
  },
];

const About = () => {
  return (
    <div className="mx-auto w-full max-w-7xl text-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
            01 / About me
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Where code meets
            <span className="text-[#B5A4DF]">
              {" "}creativity.
            </span>
          </h2>

          <p className="mt-8 text-base leading-8 text-[#C5C6D0]">
            I'm Meiby, a Frontend Developer and 3D
            Environment Artist with experience building
            web applications, interactive experiences
            and real-time environments.
          </p>

          <p className="mt-5 text-base leading-8 text-[#9294A3]">
            My background combines technical
            problem-solving and visual storytelling.
            Whether I'm developing intuitive interfaces
            or creating immersive game environments,
            I focus on thoughtful design, performance
            and attention to detail.
          </p>
        </motion.div>

        {/* Areas of expertise */}
        <div className="flex flex-col gap-5">
          {specializations.map((area, index) => (
            <motion.article
              key={area.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-[#14161E] p-7 transition-colors duration-300 hover:border-[#B5A4DF]/40"
            >
              <span className="text-xs font-medium text-[#B5A4DF]">
                {area.number} / Specialization
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#A5A7B1]">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
