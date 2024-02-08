import React, { useState } from 'react'
import './Header.css'
import logo from '../../Assets/Cvelogo.png'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideCLickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src={logo} alt="logo" width={120} />

            <OutsideCLickHandler 
              onOutsideClick={()=>{
                setMenuOpened(false)
              }}
              >
              <div className="flexCenter h-menu"
                style={getMenuStyles(menuOpened)}
                >
                <a href="#">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>

                <button className='button'>
                    <a href="#contact">Contact</a>
                </button>
                
              </div>
            </OutsideCLickHandler>
            

            {/* menu */}
          <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight  size={30} />
          </div>
        </div>
        
    </section>
  )
}

export default Header