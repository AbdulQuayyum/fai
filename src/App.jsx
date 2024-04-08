import React from 'react'

import { About, BackToTop, Contact, Footer, Hero, Navbar, Projects, Qualification, Services, Skills } from "./Components/Index"

const App = () => {
    return (
        <div className='layout grainy'>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <About />
                {/* <Skills /> */}
                {/* <Services /> */}
                <Qualification />
                <Projects />
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