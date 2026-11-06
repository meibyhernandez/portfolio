
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL;

const slides = [
  {
    id: "futuristic",
    title: "Futuristic Scenery",
    category: "Environment Art / Unreal Engine 5",
    src: `${baseUrl}videos/futuristic.mp4`,
    href: "https://www.artstation.com/artwork/NGV4Pd",
  },
  {
    id: "god",
    title: "Ray God",
    category: "Environment Art / Unreal Engine 5",
    src: `${baseUrl}videos/god.mp4`,
  },
  {
    id: "snow",
    title: "Snowy Landscape",
    category: "Environment Art / Unreal Engine 5",
    src: `${baseUrl}videos/snow.mp4`,
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [endedWhilePaused, setEndedWhilePaused] = useState(false);
  const [videoError, setVideoError] = useState("");

  const reduceMotion = useReducedMotion();

  const currentSlide = slides[activeIndex];

  // Update project information when the fade begins.
  const displayIndex =
    isFading && incomingIndex !== null
      ? incomingIndex
      : activeIndex;

  const displaySlide = slides[displayIndex];

  // Prepare a video without removing the current one.
  const requestSlide = (index) => {
    if (incomingIndex !== null || index === activeIndex) {
      return;
    }

    setVideoError("");
    setIsFading(false);
    setIncomingIndex(index);
  };

  const nextSlide = () => {
    requestSlide((activeIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    requestSlide(
      (activeIndex - 1 + slides.length) % slides.length
    );
  };

  // Complete the transition after the crossfade.
  useEffect(() => {
    if (!isFading || incomingIndex === null) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex(incomingIndex);
      setIncomingIndex(null);
      setIsFading(false);
      setEndedWhilePaused(false);
    }, reduceMotion ? 0 : 900);

    return () => window.clearTimeout(timer);
  }, [isFading, incomingIndex, reduceMotion]);

  // Videos advance only when they finish.
  const handleVideoEnded = () => {
    if (incomingIndex !== null) {
      return;
    }

    if (isPaused || reduceMotion) {
      setEndedWhilePaused(true);
      return;
    }

    nextSlide();
  };

  const resumeCarousel = () => {
    setIsPaused(false);

    if (endedWhilePaused && !reduceMotion) {
      setEndedWhilePaused(false);
      nextSlide();
    }
  };

  const handleVideoError = (slide, isIncoming) => {
    console.error("Video failed to load:", slide.src);

    setVideoError(`Unable to load ${slide.title}`);

    if (isIncoming) {
      setIncomingIndex(null);
      setIsFading(false);
    }
  };

  return (
    <section
      id="home"
      className="bg-[#0B0D12] px-3 pb-14 pt-3 sm:px-6 lg:px-9"
    >
      <div
        className="group relative mx-auto h-[740px] max-w-[1700px] overflow-hidden rounded-[24px] border border-white/10 bg-[#14161E] sm:h-[800px] lg:h-[85vh] lg:min-h-[650px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={resumeCarousel}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            resumeCarousel();
          }
        }}
      >
        {/* CURRENT VIDEO */}
        <video
          key={currentSlide.id}
          src={currentSlide.src}
          autoPlay={!reduceMotion}
          muted
          playsInline
          controls={Boolean(reduceMotion)}
          preload="auto"
          onEnded={handleVideoEnded}
          onError={() => handleVideoError(currentSlide, false)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
        />

        {/* NEXT VIDEO: remains hidden until playing */}
        {incomingIndex !== null && (
          <video
            key={slides[incomingIndex].id}
            src={slides[incomingIndex].src}
            autoPlay
            muted
            playsInline
            preload="auto"
            onPlaying={() => setIsFading(true)}
            onError={() =>
              handleVideoError(slides[incomingIndex], true)
            }
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] ease-in-out group-hover:scale-[1.025] ${
              isFading ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDuration: reduceMotion
                ? "0ms"
                : "900ms",
            }}
          />
        )}

        {/* GRADIENT FOR TEXT READABILITY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* TOP INFORMATION */}
        <div className="absolute left-6 right-6 top-28 z-10 flex items-center justify-between gap-4 sm:left-12 sm:right-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/85 sm:text-xs">
            Frontend Developer / 3D Environment Artist
          </p>

          <span className="hidden text-xs text-white/80 sm:block">
            {String(displayIndex + 1).padStart(2, "0")}
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-9 sm:px-12 sm:pb-12 lg:px-16 lg:pb-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            {/* MAIN HEADING */}
            <div className="max-w-3xl">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#D6C8F0]">
                Meiby Hernández / Portfolio
              </p>

              <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl xl:text-[100px]">
                From pixels to
                <span className="block italic">
                  entire worlds.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Creating interactive digital experiences
                and immersive real-time environments.
              </p>

              <a
                href="#work"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0B0D12] transition-colors hover:bg-[#D6C8F0]"
              >
                Explore my work
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="max-w-xs lg:text-right">
              <motion.div
                key={displaySlide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#D6C8F0]">
                  Featured Project
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {displaySlide.title}
                </h2>

                <p className="mt-2 text-sm text-white/75">
                  {displaySlide.category}
                </p>

                {displaySlide.href && (
                  <a
                    href={displaySlide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#D6C8F0]"
                  >
                    View project
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </motion.div>

              {/* ARROWS */}
              <div className="mt-7 flex items-center gap-3 lg:justify-end">
                <button
                  type="button"
                  onClick={previousSlide}
                  disabled={incomingIndex !== null}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-50"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={incomingIndex !== null}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-50"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* SLIDE INDICATORS */}
          <div
            role="group"
            aria-label="Choose featured project"
            className="mt-10 flex gap-2"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                disabled={incomingIndex !== null}
                onClick={() => requestSlide(index)}
                aria-label={`Show ${slide.title}`}
                aria-pressed={displayIndex === index}
                className={`h-1 rounded-full transition-all duration-500 disabled:cursor-wait ${
                  displayIndex === index
                    ? "w-14 bg-[#D6C8F0]"
                    : "w-7 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {videoError && (
            <p role="status" className="mt-3 text-xs text-amber-300">
              {videoError}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
