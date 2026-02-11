import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skills } from '../assets/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technology Stack"
          description="Focused on backend reliability and frontend user experience with modern full stack tools."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
