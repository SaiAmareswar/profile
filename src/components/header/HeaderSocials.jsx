import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

// link for icons is https://react-icons.github.io/react-icons/

// import { BsLinkedin } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank'><i class="bi bi-linkedin"></i></a>
      <a href="https://github.com" target='_blank'><i class="bi bi-github"></i></a>
      <a href="https://instagram.com" target='_blank'><i class="bi bi-instagram"></i></a>
      <a href="https://facebook.com" target='_blank'><i class="bi bi-facebook"></i></a>
    </div>
  )
}

export default HeaderSocials
