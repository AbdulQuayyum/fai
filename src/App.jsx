import React from 'react'

import { About, BackToTop, Contact, Hero, Navbar, Projects, Qualification, Services, Skills } from "./Components/Index"

const App = () => {
    return (
        <div className='layout'>
            <header>
                <Navbar />
            </header>
            <main>
                <span>Hi, I am Faidah Alao</span>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Projects />
                <Contact />
            </main>
            <footer>
                <BackToTop />
            </footer>
        </div>
    )
}

export default App