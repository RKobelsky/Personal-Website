import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Russell</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#coursework">Coursework</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/russell.kobelsky.54/" target="_blank"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/russell_kobelsky/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/RKobelsky" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Russell Kobelsky. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer