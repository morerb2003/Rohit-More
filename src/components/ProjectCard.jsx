import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="glass-card overflow-hidden"
    >
      <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            <FiGithub size={16} /> GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
