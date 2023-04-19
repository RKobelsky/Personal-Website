import React from 'react'
import './coursework.css'
import eecs203 from '../../assets/eecs203.png'
import eecs183 from '../../assets/eecs183.png'
import eecs280 from '../../assets/eecs280.webp'
import si110 from '../../assets/si110.png'
import eecs281 from '../../assets/eecs281.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Coursework = () => {
  return (
    <section id='coursework'>
      <h5>What I've learned in class</h5>
      <h2>Coursework</h2>
        <Swiper className="container coursework__container" 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

          <SwiperSlide className="course">
            <div className="class__avatar">
              <img src={eecs281} alt="EECS 281" />
            </div>
            <h5 className='class__name'>Data Structures & Algorithms</h5>
              <small className='class__review'>
                I took Data Structures & Algorithms (EECS 281) in the Winter of 2022. The class
                goes in depth teaching the fundamental data structures and algorithms found 
                in computer science. I learned how to implement strucures such as stacks, 
                priority queues, and hashtables in order to construct efficient algorithms such
                as streaming algorithms, BFS, DFS, and optimization algorithms to create projects
                that solve problems such as TSP, map cartography, database management, and stock
                trading.
              </small>
          </SwiperSlide>

          <SwiperSlide className="course">
            <div className="class__avatar">
              <img src={eecs203} alt="EECS 203" />
            </div>
            <h5 className='class__name'>Discrete Mathematics</h5>
              <small className='class__review'>
                I took Discrete Mathematics (EECS 203) in the Fall of 2022. The class really 
                helps turn students into mathematical thinkers and increases fluency in the 
                mathematical basics of computer science. The course covered symbolic logic, 
                natural deduction, mathematical proofs, set theory, probability, relations, 
                number theory, cryptography, and more. 
              </small>
          </SwiperSlide>

          <SwiperSlide className="course">
            <div className="class__avatar">
              <img src={eecs280} alt="EECS 280" />
            </div>
            <h5 className='class__name'>Programming and Intro Data Structures</h5>
              <small className='class__review'>
                I took Programming and Intro Data Structures (EECS 280) in the Winter of 2021.
                The class covers hands-on experience to computer science fundamentals, with programming
                in C++. In EECS 280 I really got a chance to get comfortable with C++, and working on
                projects over an extended timeline. Over the course of the semester, I built an image
                processing program, a Euchre card game, a web backend, and a machine learning algorithm.
              </small>
          </SwiperSlide>

          <SwiperSlide className="course">
            <div className="class__avatar">
              <img src={eecs183} alt="EECS 183" />
            </div>
            <h5 className='class__name'>Elementary Programming Concepts</h5>
              <small className='class__review'>
                I took Elementary Programming Concepts (EECS 183) in the Fall of 2021. The class is an 
                introductory course to computer science and programming, covering the basics of computing
                as well as problem-solving and algorithmic thinking. Some topics I learned include control
                flow, introductory data structures, algorithms using selection and iteration, basic 
                object-oriented programming, testing and debugging.
              </small>
          </SwiperSlide>
          <SwiperSlide className="course">
            <div className="class__avatar">
              <img src={si110} alt="SI 110" />
            </div>
            <h5 className='class__name'>Introduction to Information Studies</h5>
              <small className='class__review'>
                I took Introduction to Information Studies (SI 110) in the Fall of 2021. This course gave
                me the conceptual tools for an initial understanding of the politics, economics, and culture
                of the Information Age, providing a foundation for potential future applications like UX/UI 
                design and Data Science.
              </small>
          </SwiperSlide>
        </Swiper>
      
    </section>
  )
}

export default Coursework