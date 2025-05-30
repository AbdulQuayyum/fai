import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, Star, Heart, Rocket, Lightbulb, Crown, Diamond, Coffee, Music, Camera, Palette, Globe, Shield, Flame, Trophy, Gift, Compass } from "lucide-react"

import { Transition, SlideIn } from '../Utilities/Transitions';

import { faicoporate, fai, fai01, fai02, fai03 } from '../Assets/Index';

const Hero = () => {
  const floatingIcons = [
    { icon: Sparkles, delay: 0, startX: '10%', startY: '10%', x: 60, y: 40 },
    { icon: Zap, delay: 0.5, startX: '90%', startY: '10%', x: -60, y: 50 },
    { icon: Target, delay: 1, startX: '50%', startY: '5%', x: 70, y: -30 },
    { icon: Star, delay: 1.5, startX: '5%', startY: '50%', x: 80, y: -60 },
    { icon: Heart, delay: 2, startX: '95%', startY: '50%', x: -80, y: 70 },
    { icon: Rocket, delay: 2.5, startX: '50%', startY: '50%', x: 90, y: -90 },
    { icon: Lightbulb, delay: 3, startX: '10%', startY: '90%', x: 70, y: -60 },
    { icon: Crown, delay: 3.5, startX: '90%', startY: '90%', x: -70, y: -50 },
    { icon: Diamond, delay: 4, startX: '50%', startY: '95%', x: 80, y: -80 },
    { icon: Coffee, delay: 4.5, startX: '25%', startY: '25%', x: -60, y: 80 },
    { icon: Music, delay: 5, startX: '75%', startY: '25%', x: 60, y: 90 },
    { icon: Camera, delay: 5.5, startX: '25%', startY: '75%', x: -70, y: -40 },
    { icon: Palette, delay: 6, startX: '75%', startY: '75%', x: 70, y: -60 },
    { icon: Globe, delay: 6.5, startX: '35%', startY: '50%', x: -80, y: 60 },
    { icon: Shield, delay: 7, startX: '65%', startY: '50%', x: 80, y: -70 },
    { icon: Flame, delay: 7.5, startX: '50%', startY: '30%', x: -90, y: 80 },
    { icon: Trophy, delay: 8, startX: '50%', startY: '70%', x: 90, y: -50 },
    { icon: Gift, delay: 8.5, startX: '5%', startY: '25%', x: 100, y: 70 },
    { icon: Compass, delay: 9, startX: '95%', startY: '75%', x: -100, y: -80 }
  ]

  return (
    <section className="flex flex-col items-center justify-center w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <section className="relative flex items-center justify-center w-full min-h-screen">
        {floatingIcons.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, item.x, 0], y: [0, item.y, 0], rotate: [0, 360, 0] }} transition={{ duration: 8, delay: item.delay, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }} className="absolute text-dusty-rose" style={{ left: item.startX, top: item.startY, transform: 'translate(-50%, -50%)' }} >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.4 }} className="mb-8">
            <div className="relative w-40 h-40 mx-auto md:w-48 md:h-48">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} className="absolute inset-0 p-1 rounded-full bg-gradient-to-r from-navy via-navy/20 to-navy/90">
                <div className="w-full h-full p-2 bg-white rounded-full">
                  <img src={faicoporate} alt="Faidah Alao" width={200} height={200} className="object-cover w-full h-full rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mb-6">
            <motion.h1 className="mb-4 text-4xl font-bold md:text-7xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="inline-block">
                  Hello! I'm Faidah
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="inline-block font-normal text-navy">
                  Brand Strategist
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="max-w-3xl mx-auto mb-8 leading-relaxed text-md md:text-xl text-navy/80">
            Creative marketing professional crafting compelling narratives that drive engagement and deliver high-impact
            campaigns across digital platforms.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="grid max-w-2xl grid-cols-3 gap-8 mx-auto mb-12" >
            {[
              { number: "60%", label: "Team Efficiency Boost" },
              { number: "25%", label: "Engagement Growth" },
              { number: "97%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }} className="mb-2 text-2xl font-bold md:text-3xl text-navy">
                  {stat.number}
                </motion.div>
                <div className="text-sm text-navy/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className='w-full md:w-fit' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }}>
            <button className=" bg-transparent w-full border border-navy hover:bg-[#F6F6F6] text-navy hover:text-terracotta hover:border-terracotta px-8 py-4 rounded-full flex items-center justify-center text-lg font-semibold group">
              <motion.a href="#contact" className='flex items-center justify-center' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Let's Create Magic Together
                <motion.div className="inline-block ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default Hero