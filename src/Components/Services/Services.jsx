import React from 'react'
import './Services.css'
import survey from '../../Assets/survey.png'
import construction from '../../Assets/construction.png'
import water from '../../Assets/water.png'
import road from '../../Assets/road.png'
import installation from '../../Assets/installation.png'
import project from '../../Assets/project.png'
import renovation from '../../Assets/renovation.png'
import maintenance from '../../Assets/maintenance.png'

const data = [
  {
      id:1,
      image: survey,
      title:"Land Surveying",
      detail:"Providing layout and verification of structures during construction projects"
  },
  {
      id:2,
      image: renovation,
      title:"Building Renovation",
      detail:"Services aimed at revitalizing and improving existing structures"
  },
  {
      id:3,
      image: road,
      title:"Road Construction",
      detail:"Installing different types of road pavement either the Rigid(Concrete Pavement) or Flexible (Asphaltic pavement)"
  },
  {
      id:4,
      image: water,
      title:"Water Project",
      detail:"Overseeing the planning, design, implementation, and maintenance of projects related to water resource management"
  },
  {
      id:5,
      image: maintenance,
      title:"Building Maintenance",
      detail:"Aimed at preserving, repairing, and improving the functionality and appearance of buildings"
  },
  {
      id:6,
      image: project,
      title:"Project Management",
      detail:"Aimed at planning, executing, controlling, and closing projects effectively and efficiently"
  },
  {
      id:7,
      image: installation,
      title:"Installation",
      detail:"Providing a range of technical products and systems, as well as the expertise needed to install, integrate and maintain them"
  },
  {
      id:8,
      image: construction,
      title:"Building Construction",
      detail:"Our services facilitate the planning, design, and construction of various types of buildings"
  },
]

const Services = () => {
  return (
    <section id='services' className="s-wrapper">
        <div className=" flexColCenter s-container">
            <span className='orangeText'>Our Services</span>
            <span className='primaryText'>What We Can Offer You</span>
        </div>
      <div className="paddings innerWidth flexCenter s-head">
        

            {
              data.map(({id, image, title, detail}) => {
                return  (
                  <article key={id} className='s-box'>
                    <div className="s-image">
                      <img src={image} alt={title} />
                    </div>
                    <h1>{title}</h1>
                    <p className='secondaryText'>{detail}</p>

                  </article>
                )
              })
            }
      
      </div>
    </section>
  )
}

export default Services