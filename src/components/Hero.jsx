import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#B7CDD8]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-[#323533]`}>
            Hi, I'm <span className="text-[#ADC4BC]">Meiby</span>
          </h2>
          <p className={`${styles.heroSubText} mt-1 text-[#323533]`}>
            I develop 3D props and environments, user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#B4BFB5] flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#B4BFB5] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
