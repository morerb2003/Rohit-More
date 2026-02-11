function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-300">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
