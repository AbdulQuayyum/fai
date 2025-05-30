import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin, TrendingUp, Zap } from "lucide-react"

import { SlideIn, Transition } from "../Utilities/Transitions"

const Qualification = () => {
    const [hover, setHover] = useState(null)
    const [data, setData] = useState([])

    const experience = [
        {
            id: 1,
            jobTitle: "Marketing Director, Creative Director",
            companyName: "AIESEC in Ilorin",
            companyLocation: "Ilorin, Nigeria",
            startDate: "Aug 2023",
            endDate: "Feb 2025",
            achievements: [
                "Spearheaded strategic marketing initiatives across campaigns, boosting team efficiency by 60% through process optimization",
                "Managed a cross-functional team responsible for content creation, marketing and promotion",
                "Coordinated and monitored marketing campaigns, leveraging data analytics to refine strategies and improve campaign performance",
                "Led and directed a team of creative professionals (graphic design, coverage and copywriting), resulting in an 80% increase in the visual appeal of promotional campaigns",
                "Delivered 10+ high-impact campaigns on time, meeting strict quality standards and brand consistency",
            ],
            metrics: { efficiency: "60%", campaigns: "10+", visualAppeal: "80%" },
        },
        {
            id: 2,
            jobTitle: "Social Media Manager",
            companyName: "AIESEC in Nigeria",
            companyLocation: "Nigeria",
            startDate: "Sept 2023",
            endDate: "Sept 2024",
            achievements: [
                "Developed and executed a multi-platform content strategy, resulting in 25% growth in engagement metrics",
                "Revamped social media touchpoints to enhance user experience and brand consistency",
                "Orchestrated an impactful social media strategy, overseeing multiple platforms and crafting compelling content",
                "Managed customer databases and rebranded the touchpoint experience for customers",
                "Increased engagement metrics by 25% across all platforms through strategic content planning",
            ],
            metrics: { engagement: "25%", platforms: "Multi", experience: "Enhanced" },
        },
        {
            id: 3,
            jobTitle: "Customer Support Manager",
            companyName: "AIESEC in Nigeria, AIESEC International",
            companyLocation: "Nigeria / Global",
            startDate: "June 2023",
            endDate: "Aug 2024",
            achievements: [
                "Streamlined customer query and complaint resolution process through Zendesk",
                "Achieved a 30% decrease in customer support ticket resolution time, resulting in improved customer satisfaction",
                "Leveraged data analysis and quality assurance techniques to optimize the AIESEC member experience globally, resulting in a 15% improvement in user satisfaction",
                "Achieved 97% customer satisfaction through insightful support and continuous improvement",
                "Supervised daily operations of the customer support team, ensuring optimal performance, leading to a conversion rate of 212.8% from Visitors to Customers",
                "Ensured customer satisfaction through prompt query handling; Achieved 7,600+ recruitment sign-ups",
                "Spearheaded customer interactions across diverse social media platforms, resulting in a 20% increase in customer satisfaction over six months",
            ],
            metrics: { satisfaction: "97%", signups: "7,600+", conversion: "212.8%" },
        },
        {
            id: 4,
            jobTitle: "B2C Manager",
            companyName: "AIESEC in Ghana",
            companyLocation: "Ghana",
            startDate: "July 2023",
            endDate: "Jan 2024",
            achievements: [
                "Built relationships with customers across channels, resulting in a 15% increase in satisfaction scores",
                "Streamlined communication workflows, improving collaboration and response rates by 30%",
            ],
            metrics: { satisfaction: "15%", collaboration: "30%", channels: "Multi" },
        }
    ]


    useEffect(() => {
        setData(experience)
    }, [])

    return (
        <section id="qualifications" className="py-20 px-4">
            <div className="relative flex flex-col justify-center w-full">
                <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <SlideIn>
                        <span className='text-xl font-bold md:text-3xl' >
                            What is Faidah's Qualification?
                        </span>
                    </SlideIn>
                    <motion.div className='flex flex-col gap-y-4 text-center' initial={{ opacity: 0, x: -100, rotateY: -30 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} >
                        <motion.span className='text-md leading-relaxed md:text-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.8 }} whileInView={{ textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 2px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"] }} viewport={{ once: false }} >
                            A track record of driving results through strategic marketing initiatives and team leadership
                        </motion.span>
                    </motion.div>
                </div>
                <div className='flex justify-center mt-6 w-full'>
                    <div className='w-full max-w-7xl'>
                        {data.map((item, index) => (
                            <Transition key={item.id} className="px-2 py-4 border-b md:py-8 border-white/10 hover:bg-white/5 md:px-12" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} >
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-sm font-bold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-navy">{item.jobTitle}</h3>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="font-semibold">{item.companyName}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{item.companyLocation}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>
                                                {item.startDate} - {item.endDate}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {Object.entries(item.metrics).map(([key, value]) => (
                                            <span key={key} variant="secondary" className="bg-dusty-rose/20 py-1 px-2 rounded-full text-terracotta">
                                                {value} {key}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <motion.div initial={{ height: 0 }} animate={{ height: hover === index ? "100%" : 0 }} transition={{ duration: 0.5 }} className="overflow-hidden flex flex-col items-start justify-start gap-y-3">
                                    <motion.div className="flex items-center gap-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                        <Zap className="w-4 h-4 text-terracotta" />
                                        <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                                    </motion.div>
                                    <motion.ul className="list-disc list-inside space-y-2" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }} initial="hidden" animate="visible">
                                        {item.achievements.map((point, achievementIndex) => (
                                            <motion.li key={achievementIndex} className="text-foreground/80 max-md:text-sm" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} whileHover={{ x: 5, color: "#B8867B", transition: { duration: 0.2 } }} >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </Transition>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification