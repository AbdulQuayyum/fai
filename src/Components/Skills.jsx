import { motion } from "framer-motion"
import { Users, BarChart3, Palette, MessageSquare, Target, Globe } from "lucide-react"

import { SlideIn, Transition } from "../Utilities/Transitions"

const Skills = () => {
    const skillCategories = [
        {
            title: "Marketing Strategy",
            icon: Target,
            color: "from-terracotta to-dusty-rose",
            skills: [
                { name: "Campaign Planning & Execution", level: 95 },
                { name: "Brand Strategy", level: 90 },
                { name: "Digital Marketing", level: 88 },
                { name: "Content Strategy", level: 92 },
            ],
        },
        {
            title: "Creative & Content",
            icon: Palette,
            color: "from-dusty-rose to-terracotta",
            skills: [
                { name: "Content Creation & Copywriting", level: 94 },
                { name: "Brand Storytelling", level: 90 },
                { name: "Video Editing", level: 85 },
                { name: "Graphic Design Management", level: 88 },
            ],
        },
        {
            title: "Social Media",
            icon: Globe,
            color: "from-navy to-dusty-rose",
            skills: [
                { name: "Social Media Strategy", level: 93 },
                { name: "Community Management", level: 89 },
                { name: "Instagram Marketing", level: 91 },
                { name: "LinkedIn Strategy", level: 87 },
            ],
        },
        {
            title: "Analytics & Tools",
            icon: BarChart3,
            color: "from-terracotta to-navy",
            skills: [
                { name: "Data Analytics", level: 86 },
                { name: "Google Workspace", level: 92 },
                { name: "Zendesk", level: 88 },
                { name: "Mailchimp", level: 85 },
            ],
        },
        {
            title: "Leadership",
            icon: Users,
            color: "from-dusty-rose to-navy",
            skills: [
                { name: "Team Leadership", level: 94 },
                { name: "Project Coordination", level: 91 },
                { name: "Cross-functional Collaboration", level: 89 },
                { name: "Performance Management", level: 87 },
            ],
        },
        {
            title: "Customer Relations",
            icon: MessageSquare,
            color: "from-navy to-terracotta",
            skills: [
                { name: "Customer Relationship Management", level: 96 },
                { name: "Customer Support", level: 97 },
                { name: "Stakeholder Communication", level: 90 },
                { name: "Conflict Resolution", level: 88 },
            ],
        },
    ]

    const tools = [
        "Google Workspace",
        "Microsoft Office",
        "Zendesk",
        "Trello",
        "Notion",
        "Slack",
        "Mailchimp",
        "WordPress",
        "Instagram",
        "LinkedIn",
        "Twitter",
    ]

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <SlideIn>
                        <span className='text-xl font-bold md:text-3xl' >
                            What are Faidah's Skills?
                        </span>
                    </SlideIn>
                    <motion.div className='flex flex-col gap-y-4 text-center' initial={{ opacity: 0, x: -100, rotateY: -30 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} >
                        <motion.span className='text-md leading-relaxed md:text-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.8 }} whileInView={{ textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 2px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"] }} viewport={{ once: false }} >
                            A comprehensive skill set spanning strategic marketing, creative content, and team leadership
                        </motion.span>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 mt-12 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-navy">{skill.name}</span>
                                            <span className="text-sm text-navy/60">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }} viewport={{ once: true }} className="progress-bar h-2 rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
                    <h3 className="text-2xl font-bold mb-8 text-navy">Tools & Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {tools.map((tool, index) => (
                            <motion.span key={index} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="px-4 py-2 text-sm bg-gradient-to-r from-terracotta/10 to-dusty-rose/20 text-terracotta hover:from-terracotta/20 hover:to-dusty-rose/30 transition-all duration-200 rounded-full font-medium">
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills