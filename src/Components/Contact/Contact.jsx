import React from 'react'
import './Contact.css'
import contactImage from '../../Assets/image1.jpeg'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact' className="c-wrapper">
        <div className="paddings innerWidth flexCenter con-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.<br/>
                Address: 134, Stadium road, Taiwo Ilorin, Kwara State.
                </span>
            
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        {/* first mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span> <i class="secondaryText fa-users-class"></i>+2348034261324</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        {/*second mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span> <i class="secondaryText fa-users-class"></i>+2348095592967</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    {/* second row*/}
                    <div className="flexStart row">
                        {/* third mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Email</span>
                                    <span> <i class="secondaryText fa-users-class"></i>info@fadebengineering.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Email Us</div>
                        </div>

                        {/*fourth mode*/}
                        
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-contain">
                    <img src={contactImage} alt="contactImage" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact