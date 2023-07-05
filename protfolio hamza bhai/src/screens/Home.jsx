import React from 'react'
import Introduction from '../component/Introduction'
import SkillsAndTools from '../component/SkillsAndTools'
import About from '../component/About'
import Myservices from '../component/Myservices'
import Works from '../component/Works'
import Footer from '../component/Footer'
import JustSay from '../component/JustSay'

const Home = () => {
    return (
        <div>
            <Introduction />
            <About />
            <SkillsAndTools />
            <Myservices />
            <Works />
            <JustSay />
            <Footer />
        </div>
    )
}

export default Home
