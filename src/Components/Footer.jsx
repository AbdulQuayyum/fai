import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='flex flex-col items-center justify-between w-full px-6 pt-4 pb-10 gap-y-4 md:flex-row'>
            <span className="text-base font-bold text-zinc-700">{currentYear} &#169; Faidah Alao , All rights reserved</span>
            <span className="text-base font-bold text-zinc-700">
                Developed by   <a href="https://abdul-quayyum.vercel.app/" target="_blank" rel="noopener noreferrer">Abdul-Quayyum Alao</a>
            </span>

        </div>
    )
}

export default Footer