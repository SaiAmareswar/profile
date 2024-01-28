import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <i className="bi bi-mortarboard about__icon"></i>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <i className="bi bi-people about__icon"></i>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <i className="bi bi-folder about__icon"></i>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quidem? Atque veritatis provident animi distinctio debitis enim cum dignissimos ex error delectus ea id voluptatum sint ducimus blanditiis, accusantium at!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
