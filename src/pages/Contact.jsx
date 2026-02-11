import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { contactInfo } from '../assets/portfolioData'

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
}

const getEmailJSErrorMessage = (error) => {
  if (!error) {
    return 'Failed to send message. Please try again.'
  }

  const errorText =
    typeof error === 'string'
      ? error
      : error.text || error.message || `Unexpected error (${error.status || 'unknown'})`

  return `Failed to send message: ${errorText}`
}

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim()
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim()
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim()

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error')
      setSubmitMessage('Email service is not configured. Please try again later.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_name: 'Rohit',
    }

    try {
      emailjs.init({ publicKey })
      await emailjs.send(serviceId, templateId, templateParams)
      setSubmitStatus('success')
      setSubmitMessage('Message sent successfully. I will get back to you soon.')
      setFormData(INITIAL_FORM)
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setSubmitStatus('error')
      setSubmitMessage(getEmailJSErrorMessage(error))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Useful"
          description="Feel free to reach out for full stack opportunities, freelance projects, or collaboration discussions."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">Contact Details</h3>
            <p className="mt-4 text-slate-300">Email: <a className="text-cyan-300" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p className="mt-2 text-slate-300">Phone: <a className="text-cyan-300" href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
            <p className="mt-4 text-sm text-slate-400">Location: {contactInfo.location}</p>
            <SocialLinks className="mt-6" />
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.06 }}
            onSubmit={handleSubmit}
            className="glass-card p-6"
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none ring-cyan-300 transition focus:ring-2"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none ring-cyan-300 transition focus:ring-2"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Message
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none ring-cyan-300 transition focus:ring-2"
                  placeholder="Tell me about your project..."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-fit rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus !== 'idle' ? (
                <p
                  className={`text-sm font-semibold ${
                    submitStatus === 'success' ? 'text-emerald-300' : 'text-rose-300'
                  }`}
                >
                  {submitMessage}
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
