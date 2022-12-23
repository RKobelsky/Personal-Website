import React from 'react'
import './about.css'
import ME from '../../assets/About Me.jpg'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsTools} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Here's a little bit</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <HiOutlineAcademicCap className='about__icon'/>
              <h5>Academics</h5>
              <small>3.5 GPA</small>
            </article>

            <article className='about__card'>
              <AiOutlineLaptop className='about__icon'/>
              <h5>Skillset</h5>
              <small>20+ Skills</small>
            </article>

            <article className='about__card'>
              <BsTools className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
              My name is Russell Kobelsky. I am currently a sophomore attending the University of Michigan
              pursuing a Bachelor's Degree in Computer Science, with a minor in Business. I have a passion
              for using software development to create immersive user experiences, especially through the 
              lens of game development and augmented reality. Some of my hobbies include basketball, gaming
              (especially Pokemon!), and space-related stuff.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About