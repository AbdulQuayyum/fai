import React from 'react'
import { motion } from "framer-motion";

import { Sidebar } from "./Index"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <motion.span
                    className="fixed md:top-8 top-6 md:left-8 left-6 z-30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Fai
                </motion.span>
                <Sidebar />
            </div>
        </div>
    )
}

export default Navbar