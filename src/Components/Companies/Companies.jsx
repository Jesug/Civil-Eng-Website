import React from 'react'
import './Companies.css'
import { ReactTyped } from "react-typed";

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="flexColCenter c-container">
            <span className='orangeText'>Our Major Clients </span>
            <span className='primaryText'>Among many Others</span>
        </div>
        <div className='paddings innerWidth flexCenter animate-typing'>
                <ReactTyped
                  strings={[
                            "Kwara State Government",
                            "Federal Ministry of Agriculture and Rural Development",
                            "Nigeria Stored Product Research Institute",
                            "Private Sectors",
                            "Tertiary Education Trust Fund"
                          ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
            </div>
    </section>
  )
}

export default Companies