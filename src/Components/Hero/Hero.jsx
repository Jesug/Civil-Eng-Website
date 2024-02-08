import React from 'react'
import './Hero.css'
import 'swiper/css'
import hero from '../../Assets/img1.jpeg'
import CountUp from 'react-countup'
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
        
        {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <motion.h1
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition = {{
                        duration:2,
                        type: "spring"
                    }}
                    >
                        FADEB <br /> Engineering <br />
                        <div className='animated-typing'>
                            <ReactTyped
                                strings={[
                                    "Making Dreams",
                                    "Come to Life"
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            />
                        </div>
                        </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Building Tomorrow, Today, Where</span>
                    <span className='secondaryText'>Innovation Meets Infrastructure</span>
                </div>

                <div className="flexColStart hero-button">
                    <button className='button'>
                        <a href="#about">EXPLORE</a>
                    </button>
                </div>
               

                <div className="flexCenter stats">
                   <div className="flexColCenter stat">
                        <span>
                                <CountUp start={50} end={72} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Project Completed</span>
                    </div> 

                    <div className="flexColCenter stat">
                        <span>
                                <CountUp start={60} end={72} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Satisfied Client</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                                <CountUp end={11} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Years of Experience</span>
                    </div>  
                </div>
            </div>

        {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}} 
                transition={{
                    duration: 2,
                    type: "spring"
                }}
                className="image-container">
                    <img src={hero} alt="hero-image" />
                </motion.div>
            </div>

        </div>
    </section>
  )
}

export default Hero