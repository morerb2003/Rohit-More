import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/portfolioData'

function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="Selected work demonstrating full stack architecture, ranking logic, API integration, and user-focused interfaces."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
