
import { SectionWrapper } from "../hoc";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/meiby-hernandez-morales",
  },
  {
    name: "GitHub",
    url: "https://github.com/meibyhernandez",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/meibyhernandez4",
  },
  {
    name: "ArtStation",
    url: "https://www.artstation.com/meiby_hernandez",
  },
];

const Contact = () => {
  return (
    <footer className="mx-auto w-full max-w-7xl border-t border-white/10 pt-16 text-white">

      {/* Contact heading */}
      <div className="max-w-3xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#B5A4DF]">
          Contact / Let's connect
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Let's build something
          <span className="text-[#B5A4DF]">
            {" "}meaningful.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-base leading-8 text-[#A5A7B1]">
          I'm open to opportunities in Frontend Development,
          Environment Art, and real-time 3D production.
          Feel free to reach out or explore more of my work.
        </p>

        {/* Main actions */}
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/meiby-hernandez-morales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#B5A4DF] px-7 py-3 text-sm font-medium text-[#0B0D12] transition-colors hover:bg-[#D6CBEE]"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.artstation.com/meiby_hernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-[#B5A4DF]"
          >
            Explore my 3D work
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-20 flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm text-[#9294A3]">
          © {new Date().getFullYear()} Meiby Hernández.
        </p>

        <nav aria-label="Social media profiles">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A5A7B1] transition-colors hover:text-[#B5A4DF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5A4DF]"
                >
                  {social.name}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default SectionWrapper(Contact, "contact");
