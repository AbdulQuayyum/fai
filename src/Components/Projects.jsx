import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { Transition, SlideIn } from '../Utilities/Transitions';
import { ogx, customer, calendar , content} from "../Assets/Index";

export default function Projects() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const projects = [
        {
            title: "oGX Campaign Pitch",
            description:
                "Comprehensive marketing campaign strategy featuring innovative approach to brand positioning and audience engagement. This campaign showcased strategic thinking and creative execution.",
            category: "Campaign Strategy",
            metrics: [
                { label: "Strategy Development", value: "Complete" },
                { label: "Presentation", value: "Professional" },
                { label: "Innovation", value: "High" },
            ],
            tags: ["Strategy", "Branding", "Presentation", "Innovation"],
            image: ogx,
            link: "https://docs.google.com/presentation/d/1ZnyzpfMzwgI9plyaysAEX5gucWvcWDJzKOz76N7PMp8/edit?slide=id.g251406e3cfe82ee2_0#slide=id.g251406e3cfe82ee2_0",
        },
        {
            title: "AIESEC Content Calendar",
            description:
                "Developed comprehensive content calendars and managed graphic design teams to create cohesive brand messaging across multiple platforms and campaigns.",
            category: "Content Strategy",
            metrics: [
                { label: "Platforms", value: "Multi" },
                { label: "Engagement", value: "+25%" },
                { label: "Consistency", value: "100%" },
            ],
            tags: ["Content Planning", "Social Media", "Team Management", "Brand Consistency"],
            image: calendar,
            link: "#",
        },
        {
            title: "Customer Experience Optimization",
            description:
                "Led customer support transformation achieving 97% satisfaction rate and 212.8% conversion rate improvement through strategic process optimization.",
            category: "Customer Experience",
            metrics: [
                { label: "Satisfaction", value: "97%" },
                { label: "Conversion", value: "+212.8%" },
                { label: "Sign-ups", value: "7,600+" },
            ],
            tags: ["Customer Support", "Process Optimization", "Data Analysis", "Team Leadership"],
            image: customer,
            link: "#",
        },
        {
            title: "Multi-Platform Social Strategy",
            description:
                "Orchestrated comprehensive social media strategy across Instagram, LinkedIn, and Twitter, resulting in significant engagement growth and brand consistency.",
            category: "Social Media",
            metrics: [
                { label: "Engagement", value: "+25%" },
                { label: "Platforms", value: "3+" },
                { label: "Reach", value: "Global" },
            ],
            tags: ["Social Media", "Content Creation", "Analytics", "Brand Management"],
            image:content,
            link: "#",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            rotateX: -15,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.8
            }
        }
    };

    const floatingVariants = {
        float: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const shimmerVariants = {
        initial: { x: "-100%" },
        animate: {
            x: "100%",
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3
            }
        }
    };

    return (
        <section ref={sectionRef} id="projects" className="relative w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
            <motion.div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-terracotta/5 blur-xl" animate={floatingVariants.float} />
            <motion.div className="absolute w-48 h-48 rounded-full bottom-20 right-10 bg-dusty-rose/10 blur-2xl" animate={{ ...floatingVariants.float, transition: { ...floatingVariants.float.transition, delay: 1 } }} />

            <div className="relative z-10 flex flex-col items-center justify-center w-full mx-auto max-w-7xl">
                <motion.div className='flex flex-col items-center justify-center w-full gap-y-3' initial={{ opacity: 0, y: -50, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }} viewport={{ once: true }} >
                    <SlideIn>
                        <motion.span className='relative text-xl font-bold text-center md:text-3xl' animate={pulseVariants.pulse}>
                            What has Faidah worked on?
                            <motion.div className="absolute h-1 rounded-full -bottom-2 left-1/2 bg-gradient-to-r from-terracotta to-dusty-rose" initial={{ width: 0, x: "-50%" }} whileInView={{ width: "100%" }} transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} />
                        </motion.span>
                    </SlideIn>
                    <SlideIn>
                        <motion.p className="max-w-3xl pt-3 mx-auto text-xl text-center text-navy/80" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
                            Showcasing strategic marketing initiatives and creative campaigns that delivered measurable results
                        </motion.p>
                    </SlideIn>
                </motion.div>

                <motion.div className="grid w-full gap-8 mt-12 md:grid-cols-2" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={cardVariants} whileHover={{ y: -15, scale: 1.02, rotateY: 5, transition: { type: "spring", stiffness: 300, damping: 20 } }} whileTap={{ scale: 0.98 }} className="relative overflow-hidden transition-all duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl group" style={{ transformStyle: "preserve-3d", perspective: "1000px" }} >
                            <motion.div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent" variants={shimmerVariants} initial="initial" whileHover="animate" />

                            <div className="relative overflow-hidden">
                                <motion.img src={project.image || "/placeholder.svg"} alt={project.title} width={500} height={300} className="object-cover w-full h-48" whileHover={{ scale: 1.15, rotate: 2, transition: { duration: 0.6, ease: "easeOut" } }} />
                                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
                                <motion.span className="absolute px-3 py-1 text-sm font-medium rounded-full top-4 left-4 bg-white/90 text-terracotta backdrop-blur-sm" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }} whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)", transition: { duration: 0.2 } }} >
                                    {project.category}
                                </motion.span>
                            </div>

                            <div className="relative p-6">
                                <motion.h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-navy group-hover:text-terracotta" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }} >
                                    {project.title}
                                </motion.h3>
                                <motion.p className="mb-4 leading-relaxed text-navy/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }} >
                                    {project.description}
                                </motion.p>
                                <motion.div className="relative grid grid-cols-3 gap-4 p-4 mb-4 overflow-hidden rounded-lg bg-gradient-to-r from-cream to-dusty-rose/10" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}>
                                    {project.metrics.map((metric, metricIndex) => (
                                        <motion.div key={metricIndex} className="relative z-10 text-center" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: index * 0.1 + 0.9 + metricIndex * 0.1, duration: 0.4, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.2 } }} >
                                            <motion.div className="text-lg font-bold text-terracotta" whileHover={{ textShadow: "0 0 8px rgba(205, 92, 92, 0.5)", transition: { duration: 0.2 } }} >
                                                {metric.value}
                                            </motion.div>
                                            <div className="text-xs text-navy/70">{metric.label}</div>
                                        </motion.div>
                                    ))}
                                    <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-r from-terracotta/5 to-dusty-rose/5" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                                </motion.div>
                                <motion.div className="flex flex-wrap gap-2 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 + 1, duration: 0.5 }}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span key={tagIndex} className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full cursor-pointer" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 1.1 + tagIndex * 0.05, duration: 0.3 }} whileHover={{ backgroundColor: "rgba(205, 92, 92, 0.1)", color: "#cd5c5c", scale: 1.05, y: -1, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.a href={project.link} className="relative inline-flex items-center justify-center w-full gap-2 px-4 py-2 overflow-hidden font-medium text-gray-700 transition-all duration-300 border border-gray-300 rounded-lg hover:bg-terracotta hover:text-white hover:border-terracotta group" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 1.2, duration: 0.5 }} whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(205, 92, 92, 0.3)" }} whileTap={{ scale: 0.98 }} >
                                    <motion.div className="absolute inset-0 bg-terracotta" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
                                    <span className="relative z-10">View Details</span>
                                    <motion.svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" whileHover={{ x: 3, rotate: 15, transition: { duration: 0.2 } }} >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </motion.svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}