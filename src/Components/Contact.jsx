import React, { useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import cogoToast from 'cogo-toast'
import { FaHandPointRight } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { BsLinkedin, BsWhatsapp } from "react-icons/bs"

import { Transition, SlideIn } from '../Utilities/Transitions';
import { UseForm, Validate } from '../Utilities/Validations/Index';

const Contact = () => {
    const form = useRef()

    const SendEmail = () => {
        emailjs.sendForm('service_48ie7qs', 'template_vx1z2un', form.current, 'u52fGo9v9_4YPsyao')
            .then(() => {
                cogoToast.success(
                    <div>
                        <b>Success</b>
                        <div>Messeage sent successfully</div>
                    </div>, { position: 'top-right' }
                )
            }).catch(() => {
                cogoToast.error(
                    <div>
                        <b>Error</b>
                        <div>Message not sent, try again</div>
                    </div>, { position: 'top-right' }
                )
            })
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = UseForm(SendEmail, Validate)

    return (
        <div className="contact main-section" id="Contact">
            <div className='flex flex-col items-center justify-center pb-6 gap-y-3'>
                <SlideIn>
                    <span className='text-xl font-bold md:text-3xl' >
                        How to reach Faidah?
                    </span>
                </SlideIn>
            </div>
            <div className="contact-container main-container main-grid">
                <div className="contact-content">
                    <h3 className="contact-title dark:text-gray-300">Let's have a conversation </h3>
                    <div className="contact-info">
                        <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
                            < SiGmail className='contact-card-icon dark:text-[#fff]' />
                            <h3 className="contact-card-title dark:text-gray-200">Email</h3>
                            <span className="contact-card-data dark:text-gray-300">fai@gmail.com</span>
                            <a href="mailto:fai@gmail.com" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                                Contact me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
                            </a>
                        </div>
                        <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
                            < BsWhatsapp className='contact-card-icon dark:text-[#fff]' />
                            <h3 className="contact-card-title dark:text-gray-200">Whatsapp</h3>
                            <span className="contact-card-data dark:text-gray-300">+234 807 859 5073</span>
                            <a href="https://api.whatsapp.com/send?phone=2348182560793&text=Heyy Fai, I am" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                                Contact me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
                            </a>
                        </div>
                        <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
                            < BsLinkedin className='contact-card-icon dark:text-[#fff]' />
                            <h3 className="contact-card-title dark:text-gray-200">LinkedIn</h3>
                            <span className="contact-card-data dark:text-gray-300">Faidah Alao</span>
                            <a href="https://www.linkedin.com/in/faidah-alao-b265a6239/message" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                                Contact me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-content">
                    <h3 className='contact-title dark:text-gray-300'>Send a quick message</h3>
                    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div className="contact-form-div">
                            <label htmlFor="" className="contact-form-tag dark:bg-[#1c1c24] dark:text-[#fff]">Name</label>
                            <input
                                type="text"
                                name='visitorName'
                                onChange={handleChange}
                                value={values.visitorName || ''}
                                // required 
                                // className="contact-form-input dark:bg-transparent dark:border-[#fff] dark:border-[1px]"
                                className={`contact-form-input dark:bg-transparent dark:border-[#fff] dark:border-[1px] input ${errors.visitorName && 'is-danger'}`}
                                placeholder='Your name' />
                            {errors.visitorName && (
                                <p className="help">{errors.visitorName}</p>
                            )}
                        </div>
                        <div className="contact-form-div">
                            <label htmlFor="" className="contact-form-tag dark:bg-[#1c1c24] dark:text-[#fff]">Email address</label>
                            <input
                                type="email"
                                name='visitorEmail'
                                onChange={handleChange}
                                value={values.visitorEmail || ''}
                                // required 
                                // className="contact-form-input dark:bg-transparent dark:border-[#fff] dark:border-[1px]"
                                className={`contact-form-input dark:bg-transparent dark:border-[#fff] dark:border-[1px] input ${errors.visitorEmail && 'is-danger'}`}
                                placeholder='Your email address' />
                            {errors.visitorEmail && (
                                <p className="help">{errors.visitorEmail}</p>
                            )}
                        </div>
                        <div className="contact-form-div contact-form-area">
                            <label htmlFor="" className="contact-form-tag dark:bg-[#1c1c24] dark:text-[#fff]">Message</label>
                            <textarea
                                name="visitorMessage"
                                id=""
                                cols="30"
                                rows="10"
                                onChange={handleChange}
                                value={values.visitorMessage || ''}
                                // required 
                                // className='contact-form-input dark:bg-transparent dark:border-[#fff] dark:border-[1px]'
                                className={`contact-form-input dark:bg-transparent dark:border-[#fff] dark:border-[1px] input ${errors.visitorMessage && 'is-danger'}`}
                                placeholder='I would like you to work on a project with me'></textarea>
                            {errors.visitorMessage && (
                                <p className="help">{errors.visitorMessage}</p>
                            )}
                        </div>
                        <button className='flex flex-row items-center gap-x-2 border-2 border-[#000] px-12 w-full font-bold justify-center py-5 rounded-xl'>
                            Send Message
                            <svg
                                className="button-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="#000"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact