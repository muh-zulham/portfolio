import { SKILLS } from "@/app/constants/data";

const Skills = () => (
  <section id="skills">
    <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
      <h2 className="text-2xl font-semibold flex items-center">
        technical skills.
      </h2>
    </div>
    <div className="relative p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-1">
        {SKILLS.map((skill) => (
          <div key={skill} className="relative group flex items-center justify-center">
            <button
              aria-label={skill}
              className="w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
            >
              <img
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt={skill}
                width={32}
                height={32}
                decoding="async"
                className="transition-all duration-300 md:grayscale md:group-hover:grayscale-0"
              />
            </button>
            {/* Tooltip - Dark Glassmorphism */}
            <span className="absolute -top-9 opacity-0 translate-y-2 transition-all duration-300 ease-out rounded-md bg-black/80 backdrop-blur-md border border-white/10 shadow-xl px-2.5 py-1 text-[11px] font-medium text-white/90 tracking-wide group-hover:opacity-100 group-hover:translate-y-0 z-50 pointer-events-none capitalize whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
