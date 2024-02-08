import React, { useState } from 'react'
import './Value.css'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import valueImage from '../../Assets/img2.jpeg'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section id='about' className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src={valueImage} alt="aboutImage" />
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>About Us</span>
                <span className='primaryText'>Know this to know us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.
                    <br/>
                    We believe in your satisfaction
                </span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >{
                    data.map((item, i)=> {
                        const [className, setClassName] = useState(null)
                        return(
                            <AccordionItem className={'accordionItem ${className}'} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>

                                        <AccordionItemState>
                                            {({expanded}) => 
                                            expanded 
                                            ? setClassName("expanded") 
                                            : setClassName("collapsed") 
                                            }
                                        </AccordionItemState>


                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className='primaryText'>
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }</Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value