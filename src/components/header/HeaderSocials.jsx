import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GiConsoleController} from 'react-icons/gi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/russell-kobelsky/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RKobelsky" target="_blank"><FaGithub/></a>
        <a href="https://sld-studios.itch.io/" target="_blank"><GiConsoleController/></a>

    </div>
  )
}

export default HeaderSocials