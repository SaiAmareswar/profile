import React from 'react'
import './nav.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import { IoHomeOutline } from "react-icons/io5";
// import { TfiUser } from "react-icons/tfi";
// import { PiGraduationCap } from "react-icons/pi";
// import { LiaHeartbeatSolid } from "react-icons/lia";
// import { LiaIdCard } from "react-icons/lia";
// import { GrGroup } from "react-icons/gr";
// import { BsMailboxFlag } from "react-icons/bs";
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title='Home'><i class="bi bi-house-door"></i>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title='about'><i class="bi bi-person"></i>About</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title='Experience'><i class="bi bi-mortarboard"></i>Experience</a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><i class="bi bi-wrench-adjustable-circle"></i></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title='Works'><i class="bi bi-globe-central-south-asia"></i>Works</a>
      {/* <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><i class="bi bi-people"></i></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title='contact'><i class="bi bi-person-vcard-fill"></i>Contact</a>
    </nav>
  )
}

export default Nav
