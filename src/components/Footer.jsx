import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">Copyright {new Date().getFullYear()} Rohit More. All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
