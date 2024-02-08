import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with FADEB Engineering</span>
                <span className='secondaryText'>FADED Engineering Nigeria Limited is a fully indigenous Engineering firm, established and 
                                                incorporated since 2013, committed to accurately understanding the need of each client and to identifying 
                                                innovative, economically feasible and environmentally responsible solutions. 
                                                To support these capabilities, FADEB Engineering Nigeria limited utilizes the resources of selected 
                                                groups of accomplished engineers and designers who have extensive experience in developing and 
                                                implementing practical solutions to complex engineering problems 
                                                Using our extensive knowledge base and latest technology, FADEB Engineering Nigeria Limited 
                                                provides efficient solutions for all types of civil infrastructure projects. We have been truly able to 
                                                convince our numerous clients through efficient, effective and perfect projects management and our 
                                                prompt completion of projects by our workforce of highly skilled and experienced professionals. We 
                                                always focus on delivering to-quality engineering and construction services. Our scope of services 
                                                include all aspect of civil engineering design, construction in relation to infrastructures such as Roads, 
                                                Dams, Building, Water Resource Development, to mention a few. </span>
               
               <button className='button'>
                <a href="mailto:fadebnigeria@gmail.com">Get Started</a>
               </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted