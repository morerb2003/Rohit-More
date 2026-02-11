import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const items = [
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/rohit-more-6ba115234' },
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/morerb2003' },
  { label: 'Email', icon: FiMail, href: 'mailto:rohitmore2003@gmail.com' },
]

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
