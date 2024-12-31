// import React from 'react'
// import './skills.css'
// import Frontend from './Frontend'
// import Backend from './Backend'
// import 'boxicons'

// const Skills = () => {
//   return (
//     <section className="skills section" id="skills">
//         <h2 className="section__title">Skills</h2>
//         <span className="section__subtitle">My Technical Leval</span>

//         <div className="skills__container container grid">
//             <Frontend />
//             <Backend />
//         </div>
//     </section>
//   )
// }

// export default Skills
import React from 'react';
import './skills.css';
import 'boxicons';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'bxl-html5' },
    { name: 'CSS', icon: 'bxl-css3' },
    { name: 'React', icon: 'bxl-react' },
    { name: 'JavaScript', icon: 'bxl-javascript' },
    { name: 'jQuery', icon: 'bxl-jquery' },
    
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <i className={`bx ${skill.icon} skill__icon`}></i>
            <h3 className="skill__name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
