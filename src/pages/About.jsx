import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { aboutDetails } from '../assets/portfolioData'

function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Professional Snapshot"
          description="A concise overview of my background, education, and long-term technical goals."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">Professional Summary</h3>
            <p className="mt-4 leading-7 text-slate-300">{aboutDetails.summary}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05 }}
            className="glass-card p-6"
          >
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">Education</h3>
            <p className="mt-4 leading-7 text-slate-300">{aboutDetails.education}</p>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card mt-6 p-6"
        >
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">Career Objective</h3>
          <p className="mt-4 leading-7 text-slate-300">{aboutDetails.objective}</p>
        </motion.article>
      </div>
    </section>
  )
}

export default About
