import SectionHeading from '../components/SectionHeading'
import { technicalSkills } from '../assets/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Core technologies and concepts I use to build full stack applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((group) => (
            <article key={group.category} className="glass-card p-5">
              <h3 className="text-base font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
