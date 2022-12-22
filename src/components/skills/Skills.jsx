import React from 'react'
import './skills.css'
import {BsCheck2Square} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What I'm familiar with</h5>
      <h2>Technical Skills</h2>

      <div className="container skills__container">
        <article className="skill">
          <div className="skill__head">
            <h3>Languages</h3>
          </div>
          <ul className='skill__list'>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>C++</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Python</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>C#</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>JavaScript</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>HTML/CSS</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Java</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Visual Basic</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>LaTeX</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>R</p>
            </li>
          </ul>
        </article>

        <article className="skill">
          <div className="skill__head">
            <h3>Developer Tools</h3>
          </div>
          <ul className='skill__list'>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Unity</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Git</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>VS Code</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Vim</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Slurm</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Bash</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>PlasticSCM</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Node.js</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>React</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>SwiperJS</p>  
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>RStudio</p>
            </li>
          </ul>
        </article>

        <article className="skill">
          <div className="skill__head">
            <h3>Technologies/Frameworks</h3>
          </div>
          <ul className='skill__list'>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Linux</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>GitHub</p>
            </li>
            <li>
              <BsCheck2Square className='skill__list-icon' />
              <p>Flask</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Skills