import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Eduction
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase qualification__icon"></i>
                Expireance
            </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Devlopement</h3>
                            <span className="qualification__subtitle">Red & White Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Red & White Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Devlopement</h3>
                            <span className="qualification__subtitle">Red & White Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Ux Expert</h3>
                            <span className="qualification__subtitle">Red & White Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualification