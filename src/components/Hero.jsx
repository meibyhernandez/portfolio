
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0B0D12] px-6 pb-20 pt-36 text-white sm:px-10 lg:px-20"
    >
      {/* Subtle background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(104,85,160,0.16), transparent 55%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-[#A99ACA]">
            Frontend Developer / 3D Environment Artist
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            From pixels to
            <br />
            <span className="text-[#B5A4DF]">
              entire worlds.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#A5A7B1] sm:text-lg">
            I'm Meiby Hernández, a Frontend Developer and
            3D Environment Artist creating intuitive
            digital interfaces and immersive game worlds.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#0B0D12] transition-colors hover:bg-[#D6CBEE]"
            >
              Explore my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium transition-colors hover:border-white/60"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <div className="mt-24 grid gap-6 border-t border-white/10 pt-7 text-sm text-[#858994] sm:grid-cols-3">
          <div>01 / Frontend Development</div>
          <div>02 / Environment & Prop Art</div>
          <div>03 / Real-time 3D</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
