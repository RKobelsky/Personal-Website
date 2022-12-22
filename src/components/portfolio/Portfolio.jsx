import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Website.png'
import IMG2 from '../../assets/nasasuits.png'
import IMG3 from '../../assets/raptortractors.png'
import IMG4 from '../../assets/curseortreat.png'
import IMG5 from '../../assets/monkeymedic.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some of my recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Personal Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RKobelsky/Personal-Website" className='btn' target="_blank" >GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>NASA SUITS Challenge</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CLAWS-UMICH" className='btn' target="_blank" >GitHub</a>
            <a href="https://claws.engin.umich.edu/" className='btn btn-primary' target="_blank" >Check it out</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Raptor Tractors</h3>
          <div className="portfolio__item-cta">
            <a href="https://sld-studios.itch.io/raptor-tractors" className='btn btn-primary' target="_blank" >Check it out</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Curse or Treat</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RKobelsky/Curse-Or-Treat" className='btn' target="_blank" >GitHub</a>
            <a href="https://sld-studios.itch.io/curse-or-treat" className='btn btn-primary' target="_blank" >Check it out</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Monkey Medic</h3>
          <div className="portfolio__item-cta">
            <a href="https://sld-studios.itch.io/monkey-medic" className='btn btn-primary' target="_blank" >Check it out</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio