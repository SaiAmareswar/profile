import React from 'react'
import './services.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I offer
      </h5>
      <h2>
        Services
      </h2>
      <div className="container services__container">

        {/* ============ ui ux design =============== */}

        <article className="service">
          <div className="service__head">
            <h3>
              UI/UX Design
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* =============== Web Development =================== */}

        <article className="service">
          <div className="service__head">
            <h3>
              Web Development
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* ================ Content Creation ================= */}

        <article className="service">
          <div className="service__head">
            <h3>
              Content Creation
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <i className="bi bi-check-lg service__list-icon"></i>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
