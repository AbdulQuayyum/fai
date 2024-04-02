import React from 'react'
import { motion } from "framer-motion";

import { Sidebar } from "./Index"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Fai💫
                </motion.span>
                <Sidebar />
            </div>
        </div>
    )
}

export default Navbar