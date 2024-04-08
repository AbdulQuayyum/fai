import React from 'react'
import { motion } from "framer-motion";
import { BsTwitter, BsLinkedin, BsInstagram, BsArrowRight } from "react-icons/bs"

import fai from "../Assets/Images/fai.jpeg"
import { Transition, SlideIn } from '../Utilities/Transitions';

const Hero = () => {
  return (
    <div className="hero">
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <Transition>
            <img
              src={fai}
              width={200}
              height={200}
              alt="Faidah Alao"
              className="object-cover rounded-full size-28"
            />
          </Transition>
          <div className="flex flex-col items-center py-6">
            <h2 className="overflow-hidden text-4xl font-bold md:text-7xl">
              <SlideIn>Hello! I&apos;m Faidah Alao</SlideIn>
            </h2>
            <h1 className="overflow-hidden text-3xl md:text-7xl">
              <SlideIn>A Project Manager</SlideIn>
            </h1>
          </div>
          <Transition viewport={{ once: true }} className="w-full">
            <div className="flex flex-row justify-center px-4 py-2 gap-x-5">
              <a href="" target="_blank" rel="noreferrer" className="">
                <BsTwitter />
              </a>
              <a href="https://www.linkedin.com/in/faidah-alao-b265a6239" target="_blank" rel="noreferrer" className="">
                <BsLinkedin />
              </a>
              <a href="" target="_blank" rel="noreferrer" className="">
                <BsInstagram />
              </a>
            </div>
          </Transition>
          <Transition viewport={{ once: true }}>
            <a
              href={"#contact"}
              className="px-5 py-3 mt-4 rounded-full border border-[#000] flex items-center gap-4 group"
            >
              <span>Let&apos;s talk</span>
              <BsArrowRight
                size={20}
                className="transition-transform group-hover:rotate-90"
              />
            </a>
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default Hero