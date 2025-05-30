import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { PiWhatsappLogo, } from "react-icons/pi"

import { SlideIn } from "../Utilities/Transitions"

export default function Contact() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')
    const [focusedField, setFocusedField] = useState('')

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "faidah.alao@email.com",
            href: "mailto:faidah.alao@email.com",
        }, {
            icon: PiWhatsappLogo,
            label: "WhatsApp",
            value: "+2348182560793",
            href: "https://wa.me/2348182560793"
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        const subject = encodeURIComponent(formData.subject || 'New Contact Form Submission')
        const body = encodeURIComponent(
            `Hello Faidah,\n\n` +
            `You have received a new message from your website contact form:\n\n` +
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Best regards,\n${formData.firstName} ${formData.lastName}`
        )

        const mailtoUrl = `mailto:faidah.alao@email.com?subject=${subject}&body=${body}`

        try {
            window.location.href = mailtoUrl

            setTimeout(() => {
                setIsSubmitting(false)
                setSubmitStatus('success')

                setTimeout(() => {
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                    setSubmitStatus('')
                }, 3000)
            }, 1500)
        } catch (error) {
            setIsSubmitting(false)
            setSubmitStatus('error')
        }
    }

    const requiredFields = ['email', 'firstName', 'lastName', 'message', 'subject'];
    const isFormValid = requiredFields.every(field => formData[field]);

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col items-center justify-center pb-6 gap-y-3'>
                    <SlideIn>
                        <span className='text-xl font-bold md:text-3xl' >
                            How to reach Faidah?
                        </span>
                    </SlideIn>
                </div>

                <div className="grid lg:grid-cols-2 mt-12 gap-12">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-6 text-navy">Send a Message</h3>
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-[slideInUp_0.5s_ease-out]">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-green-800">Message sent successfully! Check your email client.</span>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-[slideInUp_0.5s_ease-out]">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                                <span className="text-red-800">Something went wrong. Please try again.</span>
                            </div>
                        )}

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-2">First Name</label>
                                    <input type="text" placeholder="Your first name" name="firstName" value={formData.firstName} onChange={handleInputChange} required={true} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-2">Last Name</label>
                                    <input type="text" placeholder="Your last name" name="lastName" value={formData.lastName} onChange={handleInputChange} required={true} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-navy mb-2">Email</label>
                                <input type="email" placeholder="your.email@example.com" name="email" value={formData.email} onChange={handleInputChange} required={true} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-navy mb-2">Subject</label>
                                <input type="text" placeholder="What's this about?" name="subject" value={formData.subject} onChange={handleInputChange} required={true} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-navy mb-2">Message</label>
                                <textarea placeholder="Tell me about your project or how I can help..." rows={6} name="message" value={formData.message} onChange={handleInputChange} required={true} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none" />
                            </div>
                            <button onClick={handleSubmit} disabled={isSubmitting || !isFormValid} type="submit" className={`w-full bg-gradient-primary hover:bg-terracotta text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2  ${isSubmitting || !isFormValid ? 'opacity-75 cursor-not-allowed' : ''}`}>
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg className="button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                            <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z" fill="#fff"></path>
                                            <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="#fff"></path>
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-navy">Get in Touch</h3>
                            <p className="text-navy/70 leading-relaxed mb-8">
                                I'm always excited to discuss new opportunities and creative challenges. Whether you're looking to boost
                                your brand's engagement, develop a comprehensive marketing strategy, or need help with campaign
                                execution, I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-navy/70">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-terracotta hover:text-terracotta/80 transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-semibold text-navy">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} className="bg-gradient-primary text-white rounded-lg shadow-lg p-6 text-center">
                            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                            <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
                            <p className="mb-4 opacity-90">
                                Let's discuss your next marketing campaign and create something extraordinary together.
                            </p>
                            <a href="https://www.linkedin.com/in/faidah-alao-b265a6239" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-terracotta hover:bg-cream px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                                Connect on LinkedIn
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
