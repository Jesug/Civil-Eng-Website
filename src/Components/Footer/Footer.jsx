import React from 'react'
import './Footer.css'
import footerLogo from '../../Assets/Cvelogo.png'
import bull from '../../Assets/bull.png'
import excav from '../../Assets/excav.png'
import grade from '../../Assets/grade.png'
import load from '../../Assets/load.png'
import vib from '../../Assets/vib.png'
import mix from '../../Assets/mix.png'

const Footer = () => {
  return (
    <section className=" f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side*/}
            <div className="flexColCenter f-left">
                <img src={footerLogo} alt="logo" width={150}/>

                <span className='secondaryText slogan'>
                 From Blueprint to Reality, We Build Success
                </span>
            </div>

            {/* right side*/}
            <div className="flexColStart f-right">
                <div className="flexCenter f-menu">
                    <span><img className='motion' src={bull} alt="bull" width={30} /></span>
                    <span><img className='motion' src={excav} alt="excav"  width={30} /></span>
                    <span><img className='motion' src={grade} alt="grade"  width={30} /></span>
                    <span><img className='motion' src={load} alt="load"  width={30} /></span>
                    <span><img className='motion' src={vib} alt="vib"  width={30} /></span>
                    <span><img className='motion' src={mix} alt="mix"  width={30} /></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer