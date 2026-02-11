import { motion } from 'framer-motion'
import SocialLinks from '../components/SocialLinks'
import { profileSummary } from '../assets/portfolioData'

function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-grid section-padding">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.2),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.15),_transparent_40%)]" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Welcome to my portfolio</p>
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white sm:text-5xl">
            Hi, I'm <span className="gradient-text">{profileSummary.name}</span>
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">Java Full Stack Developer</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">{profileSummary.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="src/assets/resume/resume.pdf"
              download
              className="rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Download Resume.
            </a>
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="glass-card p-3">
            <img
              src={profileSummary.profileImage}
              alt="Rohit portrait"
              className="h-auto w-full rounded-xl border border-slate-800 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
