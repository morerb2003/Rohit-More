import { motion } from 'framer-motion'

function SkillCard({ name, level }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="glass-card p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">{name}</h3>
        <span className="text-xs font-semibold text-cyan-300">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-teal-300"
        />
      </div>
    </motion.article>
  )
}

export default SkillCard
