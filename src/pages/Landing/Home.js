import React from 'react'
import Navigation from "@CLanding/Navigation/Navigation"
import Hero from "@CLanding/Hero/Hero"
import Packets from "@CLanding/Packets/Packets"
import Footer from "@CLanding/Footer/Footer"

import {StyledContainer} from './style'
const Home = () => {
    return (
        <>
        <StyledContainer>
            <Navigation />
            <div style={{padding:"40px"}}>
            <Hero />
            <Packets />
            </div>
        </StyledContainer>
        <Footer />
        </>
    )
}

export default Home
