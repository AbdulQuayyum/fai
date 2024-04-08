import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { fai, fai01, fai02, fai03 } from '../Assets/Index';
import { TitleText, TypingText } from "./Index"

import { Transition, SlideIn } from '../Utilities/Transitions';

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ImageList = [fai, fai01, fai02, fai03]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
        }, 10000); // 10 seconds in milliseconds

        return () => clearInterval(interval);
    }, []);

    const currentImageUrl = ImageList[currentImageIndex];
    return (
        <div>
            <div className='flex justify-center items-center flex-col gap-y-3'>
                <SlideIn>
                    <span className='md:text-3xl text-xl font-bold' >
                        Who is Faidah Alao?
                    </span>
                </SlideIn>
            </div>
            <div className='flex flex-col-reverse items-center justify-center w-full gap-10 mx-auto mt-5 lg:gap-20 md:mt-12 md:flex-row'>
                <div className='flex flex-col max-w-md lg:max-w-2xl'>
                    <div className='flex flex-col gap-y-2 '>
                        <span className='text-lg'>
                            Final Year Microbiology Student | Creative Director at AIESEC in Ilorin, Nigeria
                        </span>
                        <span className='text-lg'>
                            Customer Support Manager at AIESEC in Nigeria EST | B2C Manager at AIESEC in Ghana EST
                        </span>
                        <span className='text-lg'>
                            Passionate about Graphics, Writing, Management, and Sales | Skilled in People Management and Adaptability
                        </span>
                        <span className='text-lg'>
                            Experienced in Store Management | Strong Background in SMM and knowledge of Data Science
                            Enthusiastic about the Industrial Aspect of Microbiology
                        </span>
                    </div>
                    <div className='flex items-center justify-center mt-10 sm:justify-start'>
                        <a download="Faidah's Resume" href=""
                            className="flex custom-hover items-center bg-transparent text-lg gap-x-2 outlined px-8 md:px-14 font-medium !h-[38px] md:!h-[48px] transition-all duration-150 border-[1px] border-[#000] rounded-full hover:bg-transparent hover:border-transparent text-[#000]"

                        > Check out my CV
                            <svg
                                className="button-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="#000"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div
                    className='hero-img'
                    style={{ backgroundImage: `url(${currentImageUrl})` }}>
                </div>
            </div>
        </div>
    )
}

export default About