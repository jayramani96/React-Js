import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Devloper</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <box-icon name='badge-check'></box-icon>
                <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skill__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <box-icon name='badge-check'></box-icon>
                <div>
                <h3 className="skills__name">Node Js</h3>
                <span className="skill__level">Basic</span>
                </div>
            </div>

            <div className="skills__data">
                <box-icon name='badge-check'></box-icon>
                <div>
                <h3 className="skills__name">Python</h3>
                <span className="skill__level">Intermediate</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <box-icon name='badge-check'></box-icon>
                <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skill__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <box-icon name='badge-check'></box-icon>
                <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skill__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <box-icon name='badge-check'></box-icon>
                <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skill__level">Intermediate</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend