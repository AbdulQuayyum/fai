import React from 'react'

import { About, BackToTop, Contact, Education, Footer, Hero, Navbar, Projects, Qualification, Services, Skills } from "./Components/Index"

const App = () => {
    return (
        <div className='layout grainy'>
            <header>
                <Navbar />
            </header>
            <main className='flex flex-col gap-y-10 overflow-hidden'>
                <Hero />
                <About />
                {/* <Services /> */}
                <Qualification />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <footer>
                <Footer />
                <BackToTop />
            </footer>
        </div>
    )
}

export default App