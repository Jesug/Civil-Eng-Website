import React from 'react'
import './Footer.css'
import footerLogo from '../../Assets/logo2.png'

const Footer = () => {
  return (
    <section className=" f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side*/}
            <div className="flexColStart f-left">
                <img src={footerLogo} alt="" width={120}/>

                <span className='secondaryText'>
                    Our Vision is to make all people <br/> the best place to live for them
                </span>
            </div>

            {/* right side*/}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span>145 New York, FL 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer