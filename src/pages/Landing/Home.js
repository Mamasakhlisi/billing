import React from 'react'
import Navigation from "@CLanding/Navigation/Navigation"
import Hero from "@CLanding/Hero/Hero"
import Packets from "@CLanding/Packets/Packets"
const Home = () => {
    return (
        <div style={{margin:"20px",marginTop:"50px",background:"#fff",borderRadius:"16px", position:"relative",}}>
            <Navigation />
            <div style={{padding:"40px"}}>
            <Hero />
            <Packets />
            </div>
        </div>
    )
}

export default Home
