import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

import { SlideIn, Transition } from "../Utilities/Transitions"

const Qualification = () => {
    const [hover, setHover] = useState(null)
    const [data, setData] = useState([])

    const experience = [
        {
            id: 0,
            jobTitle: "Marketing Director",
            comapanyName: "AIESEC in Ilorin",
            companyLocation: "Ilorin",
            startDate: "Feb. 2024",
            endData: "Present",
            tasks: [
                `Customer brand Experience`,
                `Student market research, analysis of supply and demand, market segmentation.`,
                `Student market research, analysis of supply and demand, market segmentation.`,
                `Coordinating and managing PR activities of AIESEC in Ilorin`,
                `Positioning AIESEC in the external environment of Ilorin`,
                `Crisis Management.`,
                `Push strategy, E-mail marketing, LEAD nurturing, meeting and follow-up.`,
                `Create materials for online and offline channels to support the sales process.`
            ],
        },
        {
            id: 1,
            jobTitle: "Customer Support Consultant",
            comapanyName: "AIESEC International",
            companyLocation: "",
            startDate: "Sep. 2023",
            endData: "Present",
            tasks: [
                `Resolving customer issues.`,
            ],
        },
        {
            id: 2,
            jobTitle: "Social Media Manager",
            comapanyName: "AIESEC in Georgia",
            companyLocation: "",
            startDate: "Sep. 2023",
            endData: "Jan. 2024",
            tasks: [
                `Interacting with customers via social media platforms.`,
            ],
        },
        {
            id: 3,
            jobTitle: "Creative Director",
            comapanyName: "AIESEC in Ilorin",
            companyLocation: "",
            startDate: "Aug. 2023",
            endData: "Jan. 2024",
            tasks: [
                `Responsible for managing the graphic design, coverage & copywriting team`,
                `Overseeing several projects from start to ﬁnish, keeping to deadlines, and signing oﬀ on these projects before they are presented to the CMO/VP`,
                `Building an environment for the creative team to work in and overseeing their ideas and projects.`,
                `Developing ideas for advertising or promotional campaigns`
            ],
        },
        {
            id: 4,
            jobTitle: "Customer Service Support Manager",
            comapanyName: "AIESEC in Nigeria",
            companyLocation: "",
            startDate: "Jul. 2023",
            endData: "Jan. 2024",
            tasks: [
                `Interacting with customers via social media platforms.`,
                `Resolving customer issues.`,
                `Supporting customers that sign up on EXPA.`,
                `Provide network to operations.`,
                `Come up with strategies to improve conversion`
            ],
        },
        {
            id: 5,
            jobTitle: "B2C manager",
            comapanyName: "AIESEC in Ghana",
            companyLocation: "",
            startDate: "Jul. 2023",
            endData: "Jan. 2024",
            tasks: [
                `Management of B2C campaigns.`,
                `Create and implement B2C campaigns.`,
                `Support ongoing campaign track and meet KPI's achievement.`
            ],
        },
        {
            id: 6,
            jobTitle: "Video Editor",
            comapanyName: "AIESEC",
            companyLocation: "",
            startDate: "Mar. 2023",
            endData: "Jan. 2024",
            tasks: [
                `Edit Videos`
            ],
        },
    ]

    useEffect(() => {
        setData(experience)
    }, [])

    return (
        <div className="relative flex flex-col justify-center w-full pb-20 mt-20">
            <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
            <div className='flex flex-col items-center justify-center gap-y-3'>
                <SlideIn>
                    <span className='text-xl font-bold md:text-3xl' >
                        What is Faidah's Qualification?
                    </span>
                </SlideIn>
            </div>
            <div className='flex justify-center w-full'>
            <div className='w-full max-w-7xl'>
                {data.map((item, index) => (
                    <Transition
                        key={item.id}
                        className="px-2 py-4 border-b md:py-8 border-white/10 hover:bg-white/5 md:px-12"
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)} >
                        <div className="flex items-center justify-between gap-x-2 md:gap-8">
                            <span className="text-black">0{index + 1}</span>
                            <div className="flex-1 text-xl md:text-5xl md:font-semibold">
                                <span className="text-lg font-bold">
                                    {item.jobTitle}
                                </span>
                            </div>
                            <div className="flex-col max-md:text-sm max-md:flex text-foreground/50">
                                <span className="italic"> {item.startDate} </span>
                                <span className="max-md:hidden">{" - "}</span>
                                <span className="italic"> {item.endData} </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 md:pl-12 text-foreground/50 max-md:text-sm">
                            <span>{item.comapanyName}</span>
                            <span>{item.companyLocation}</span>
                        </div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: hover === index ? "100%" : 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden">
                            <ul className="list-disc list-inside">
                                {item.tasks.map((point, index) => (
                                    <li key={index} className="text-foreground/80 max-md:text-sm">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </Transition>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Qualification