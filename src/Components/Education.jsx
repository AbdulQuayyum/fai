import { motion } from "framer-motion"
import { GraduationCap, Award, Users, Heart } from "lucide-react"

import { Transition, SlideIn } from '../Utilities/Transitions';

export default function Education() {
    const education = {
        degree: "Bachelor of Science (B.Sc)",
        field: "Microbiology",
        institution: "University of Ilorin",
        period: "2019 - 2024",
        description: "Developed analytical thinking and research skills that complement my marketing expertise",
    }

    const volunteering = [
        {
            organization: "HultPrize Ilorin",
            period: "2022 - 2023",
            role: "Volunteer",
            description: "Contributed to social entrepreneurship initiatives and community development projects",
        },
        {
            organization: "Tsion Academy",
            location: "Osun State",
            role: "Volunteer Teacher",
            description:
                "Provided educational support and mentorship to students, developing communication and leadership skills",
        },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5
            }
        }
    }

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const volunteerItemVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 0.9
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                delay: i * 0.3,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    }

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    return (
        <section id="education" className="relative w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
            <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }} className="absolute w-32 h-32 rounded-full top-10 right-10 bg-gradient-to-r from-dusty-rose/10 to-terracotta/10 blur-xl" />
            <motion.div animate={{ rotate: -360, x: [0, 50, 0] }} transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, x: { duration: 12, repeat: Infinity, ease: "easeInOut" } }} className="absolute w-24 h-24 rounded-full bottom-20 left-10 bg-gradient-to-r from-navy/10 to-dusty-rose/10 blur-lg" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div className='flex flex-col items-center justify-center gap-y-3' initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
                    <SlideIn>
                        <motion.span className='text-xl font-bold text-center md:text-3xl' animate={floatingAnimation}>
                            What is Faidah's Education & Community Impact?
                        </motion.span>
                        <motion.p className="max-w-3xl pt-3 mx-auto text-xl text-center text-navy/80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}>
                            Building a foundation of knowledge and giving back to the community
                        </motion.p>
                    </SlideIn>
                </motion.div>

                <motion.div className="grid gap-8 mt-12 mb-16 md:grid-cols-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }} className="relative p-8 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <motion.div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 via-transparent to-navy/5" animate={{ background: ["linear-gradient(135deg, rgba(205, 133, 63, 0.05) 0%, transparent 50%, rgba(31, 41, 55, 0.05) 100%)", "linear-gradient(135deg, rgba(31, 41, 55, 0.05) 0%, transparent 50%, rgba(205, 133, 63, 0.05) 100%)", "linear-gradient(135deg, rgba(205, 133, 63, 0.05) 0%, transparent 50%, rgba(31, 41, 55, 0.05) 100%)"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <motion.div className="flex items-center justify-center w-16 h-16 text-2xl rounded-full bg-gradient-primary" variants={iconVariants} animate={pulseAnimation}>
                                <GraduationCap className="w-8 h-8 text-white" />
                            </motion.div>
                            <motion.div variants={textVariants}>
                                <h3 className="text-2xl font-bold text-navy">Academic Excellence</h3>
                                <p className="text-navy/70">University Education</p>
                            </motion.div>
                        </div>

                        <motion.div className="relative z-10 space-y-4" variants={textVariants}>
                            <div>
                                <motion.h4 className="mb-2 text-xl font-semibold text-terracotta" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }} viewport={{ once: true }}>
                                    {education.degree}
                                </motion.h4>
                                <motion.p className="mb-1 text-lg text-navy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} viewport={{ once: true }}>
                                    {education.field}
                                </motion.p>
                                <motion.p className="mb-2 text-navy/70" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} viewport={{ once: true }}>
                                    {education.institution}
                                </motion.p>
                                <motion.span className="inline-block px-2 py-1 mb-4 text-sm border border-gray-300 rounded-full" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.5, type: "spring" }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                                    {education.period}
                                </motion.span>
                                <motion.p className="leading-relaxed text-navy/70" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} viewport={{ once: true }}>
                                    {education.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }} className="relative p-8 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl" >
                        <motion.div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/5 via-transparent to-navy/5" animate={{ background: ["linear-gradient(135deg, rgba(188, 143, 143, 0.05) 0%, transparent 50%, rgba(31, 41, 55, 0.05) 100%)", "linear-gradient(135deg, rgba(31, 41, 55, 0.05) 0%, transparent 50%, rgba(188, 143, 143, 0.05) 100%)", "linear-gradient(135deg, rgba(188, 143, 143, 0.05) 0%, transparent 50%, rgba(31, 41, 55, 0.05) 100%)"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }} />

                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <motion.div className="flex items-center justify-center w-16 h-16 text-2xl rounded-full bg-gradient-to-r from-dusty-rose to-navy" variants={iconVariants} animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 1 } }} >
                                <Heart className="w-8 h-8 text-white" />
                            </motion.div>
                            <motion.div variants={textVariants}>
                                <h3 className="text-2xl font-bold text-navy">Community Impact</h3>
                                <p className="text-navy/70">Volunteer Work</p>
                            </motion.div>
                        </div>

                        <motion.div className="relative z-10 space-y-6" variants={textVariants}>
                            {volunteering.map((vol, index) => (
                                <motion.div key={index} custom={index} variants={volunteerItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.2 } }} className="relative pl-4" >
                                    <motion.div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-dusty-rose to-terracotta" initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }} viewport={{ once: true }} />

                                    <motion.h4 className="font-semibold text-navy" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.3 + 0.3, duration: 0.5 }} viewport={{ once: true }}>
                                        {vol.organization}
                                    </motion.h4>
                                    {vol.location && (
                                        <motion.p className="text-sm text-navy/70" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.3 + 0.4, duration: 0.5 }} viewport={{ once: true }}>
                                            {vol.location}
                                        </motion.p>
                                    )}
                                    <motion.p className="mb-2 text-sm text-terracotta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }} viewport={{ once: true }}>
                                        {vol.period}
                                    </motion.p>
                                    <motion.p className="text-sm leading-relaxed text-navy/70" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }} viewport={{ once: true }}>
                                        {vol.description}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}