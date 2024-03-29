import React from 'react'
import './experience.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        What Skills I Have
      </h5>
      <h2>
        My Experience
      </h2>
      <div className="container experience__container">

        {/* ============ Frontend =================== */}

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  HTML
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>

            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  CSS
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  JavaScript
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  Bootstrap
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  Tailwind
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  Raect JS
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
          </div>
        </div>

        {/* ================ Backend =================== */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  MongoDB
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  Node JS
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  PHP
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  MySQL
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>

            <article className='experience__details'>
              <i className="bi experience__details-icon bi-patch-check-fill"></i>
              <div>
                <h4>
                  Python
                </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
