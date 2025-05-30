import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Palette, Users, TrendingUp, Award, Sparkles, Zap, Target, Download, ArrowRight } from 'lucide-react';

import { Transition, SlideIn } from '../Utilities/Transitions';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();

    // Smooth spring animations for scroll-based effects
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scaleTransform = useTransform(scrollYProgress, [0, 0.5], [1, 1.02]);
    const springY = useSpring(yTransform, { stiffness: 100, damping: 30 });
    const springScale = useSpring(scaleTransform, { stiffness: 100, damping: 30 });

    useEffect(() => {
        setIsVisible(true);

        // Mouse movement tracking for interactive elements
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotateX: 20
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const skillCardVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
            rotateY: -90,
            z: -100
        },
        visible: (index) => ({
            scale: 1,
            opacity: 1,
            rotateY: 0,
            z: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.17, 0.67, 0.83, 0.67],
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            scale: 1.08,
            y: -10,
            rotateX: 10,
            rotateY: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                type: "spring",
                stiffness: 300
            }
        }
    };

    const buttonVariants = {
        idle: {
            scale: 1,
            rotateX: 0,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        },
        hover: {
            scale: 1.05,
            rotateX: -5,
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            transition: {
                duration: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 400
            }
        },
        tap: {
            scale: 0.98,
            rotateX: 0,
            transition: { duration: 0.1 }
        }
    };

    const iconVariants = {
        idle: {
            rotate: 0,
            scale: 1
        },
        hover: {
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1],
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1]
            }
        }
    };

    const textGradientVariants = {
        hidden: {
            backgroundPosition: "0% 50%",
            filter: "blur(0.5px)"
        },
        visible: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            filter: "blur(0px)",
            transition: {
                backgroundPosition: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity
                },
                filter: {
                    duration: 1,
                    ease: "easeOut"
                }
            }
        }
    };

    // Floating animation for background elements
    const floatingVariants = {
        animate: {
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const skills = [
        {
            title: "Creative Strategist",
            description: "Crafting compelling narratives that resonate with audiences and drive meaningful engagement.",
            icon: <Palette size={24} />,
            color: "from-purple-400 to-pink-400"
        },
        {
            title: "Team Leadership",
            description: "Leading cross-functional teams to deliver high-impact campaigns with 60% efficiency improvement.",
            icon: <Users size={24} />,
            color: "from-blue-400 to-cyan-400"
        },
        {
            title: "Results-Driven",
            description: "Consistently delivering measurable results with 25% engagement growth across platforms.",
            icon: <TrendingUp size={24} />,
            color: "from-green-400 to-emerald-400"
        },
        {
            title: "Quality Excellence",
            description: "Maintaining 97% customer satisfaction through strategic thinking and continuous improvement.",
            icon: <Award size={24} />,
            color: "from-yellow-400 to-orange-400"
        }
    ];

    return (
        <section id="about" className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div className='relative flex flex-col items-center justify-center w-full overflow-hidden' style={{ y: springY, scale: springScale }}>
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div key={i} className="absolute w-2 h-2 bg-gradient-to-r from-[#e2725b] to-[#d8a7b1] rounded-full opacity-40" style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }} animate={{ y: [0, -50, 0], x: [0, 30, 0], scale: [0.5, 1, 0.5], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }} />
                    ))}
                </div>

                <div className='flex flex-col items-center justify-center w-full'>
                    <motion.div className='flex flex-col items-center justify-center gap-y-6' initial={{ opacity: 0, y: -80, scale: 0.7, rotateX: 90 }} animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 100 }} >
                        <SlideIn>
                            <motion.div className="relative py-6">
                                <span className='text-xl font-bold md:text-3xl' >
                                    Who is Faidah Alao?
                                </span>
                                <motion.div className="absolute top-4 right-1" animate={{ rotate: [0, 180, 360], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} >
                                    <Sparkles size={16} className="text-[#d8a7b1] opacity-60" />
                                </motion.div>
                            </motion.div>
                        </SlideIn>
                    </motion.div>

                    <Transition>
                        <motion.div className='flex flex-col items-center justify-center w-full gap-12 mt-8 lg:gap-24' variants={containerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
                            <motion.div className='flex flex-col items-center justify-center max-w-4xl' variants={itemVariants}>
                                <motion.div className='flex flex-col text-center gap-y-4' initial={{ opacity: 0, x: -100, rotateY: -30 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} >
                                    <motion.span className='leading-relaxed text-md md:text-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.8 }} whileInView={{ textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 2px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"] }} viewport={{ once: false }} >
                                        I am a creative and results-driven marketing professional with proven experience in content strategy, digital marketing, social media management, and copywriting. I am known for crafting compelling narratives that drive engagement and leading cross-functional teams to deliver high-impact campaigns.  I also demonstrates strong analytical thinking, storytelling skills, and a passion for brand building. I am adept at leveraging marketing tools to improve performance and reach.
                                    </motion.span>
                                </motion.div>

                                <motion.div className='flex items-center justify-center w-full mt-6 md:w-fit' initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 200 }} >
                                    <motion.a download="Faidah's Resume" href="/faidah.pdf" className="flex w-full md:w-fit custom-hover justify-center items-center bg-transparent text-lg gap-x-3 outlined px-10 md:px-16 font-medium !h-[45px] md:!h-[55px] transition-all duration-500 border-[2px] border-[#000] rounded-full hover:bg-black hover:text-white hover:border-transparent text-[#000] relative overflow-hidden group cursor-pointer" variants={buttonVariants} initial="idle" whileHover="hover" whileTap="tap">
                                        <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-black via-gray-800 to-black group-hover:translate-x-0" transition={{ duration: 0.6, ease: "easeInOut" }} />

                                        <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full" transition={{ duration: 0.8, delay: 0.2 }} />

                                        <motion.span className="relative z-10 flex items-center gap-2" whileHover={{ x: -2 }} transition={{ duration: 0.2 }}>
                                            <motion.svg className="relative z-10 button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" variants={iconVariants} initial="idle" whileHover="hover">
                                                <path d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z" fill="currentColor"></path>
                                                <path d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z" fill="currentColor"></path>
                                                <path d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z" fill="currentColor"></path>
                                                <path d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z" fill="currentColor"></path>
                                            </motion.svg>
                                            Check out my CV
                                        </motion.span>

                                        <motion.div className="relative z-10" variants={iconVariants} initial="idle" whileHover="hover">
                                            <ArrowRight size={20} />
                                        </motion.div>
                                    </motion.a>
                                </motion.div>
                            </motion.div>

                            <motion.div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4' variants={containerVariants} initial="hidden" animate="visible" >
                                {skills.map((skill, index) => (
                                    <motion.div key={index} className='relative flex flex-col items-start justify-start gap-4 p-6 transition-all duration-500 border border-transparent cursor-pointer rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white group hover:border-gray-100 hover:shadow-xl' variants={skillCardVariants} whileHover="hover" custom={index} style={{ transformStyle: "preserve-3d", }} >
                                        <motion.div className="absolute inset-0 opacity-0 rounded-2xl group-hover:opacity-100" style={{ background: `linear-gradient(45deg, transparent, ${skill.color.split(' ')[0]?.replace('from-', '')}, ${skill.color.split(' ')[2]?.replace('to-', '')}, transparent)`, }} initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 2, ease: "linear" }} />
                                        <motion.div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${skill.color} rounded-full scale-y-0 group-hover:scale-y-100 origin-top`} transition={{ duration: 0.4, ease: "easeOut" }} />

                                        <motion.div className="relative z-10 flex items-center gap-4">
                                            <motion.div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`} animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }} whileHover={{ scale: 1.1, rotate: 15, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }} >
                                                <motion.span className="block text-white" whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }}>
                                                    {skill.icon}
                                                </motion.span>
                                            </motion.div>

                                            <motion.span className="text-lg font-bold lg:text-xl" whileHover={{ scale: 1.05, x: 5 }} transition={{ duration: 0.3 }}>
                                                {skill.title}
                                            </motion.span>
                                        </motion.div>

                                        <motion.span className="relative z-10 leading-relaxed text-gray-600" initial={{ opacity: 0.8 }} whileHover={{ color: "#374151" }} transition={{ duration: 0.3 }} >
                                            {skill.description}
                                        </motion.span>
                                        <motion.div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${skill.color} rounded-full opacity-0 group-hover:opacity-100`} animate={{ y: [-5, -15, -5], x: [0, 8, 0], scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </Transition>
                    <motion.div className="fixed top-16 left-8 w-40 h-40 bg-gradient-to-br from-[#e2725b] to-[#d8a7b1] rounded-full pointer-events-none -z-10" style={{ filter: 'blur(1px)', opacity: 0.25 }} variants={floatingVariants} animate="animate" />

                    <motion.div className="fixed bottom-16 right-8 w-32 h-32 bg-gradient-to-br from-[#d8a7b1] to-[#e2725b] rounded-full pointer-events-none -z-10" style={{ filter: 'blur(0.5px)', opacity: 0.2 }} animate={{ y: [0, 25, 0], x: [0, -12, 0], rotate: [0, 270, 360], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

                    <motion.div className="fixed w-20 h-20 rounded-full pointer-events-none top-1/2 left-1/4 bg-gradient-to-br from-purple-400 to-pink-400 -z-10" style={{ filter: 'blur(2px)', opacity: 0.15 }} variants={pulseVariants} animate="animate" />
                    <motion.div className="fixed w-6 h-6 bg-gradient-to-br from-[#e2725b] to-[#d8a7b1] rounded-full pointer-events-none -z-10" style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%`, filter: 'blur(3px)', opacity: 0.1 }} animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                </div>
            </motion.div>
        </section>
    )
}

export default About
