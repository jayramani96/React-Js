import React from "react";
import "./project.css";
import Img1 from "../../assets/Screenshot-1.png"
import Img2 from "../../assets/Screenshot-2.png"
import Img3 from "../../assets/Screenshot-3.png"

const Project = () => {
  return (
    <div className="grid-container">
      <div className="card">
        <img src={Img1} alt="Project Thumbnail" className="card-image" />
        <h3>About Me</h3>
        <p>I am a frontend developer with years of experience creating UI/UX interfaces and web pages.</p>
        <div className="card-buttons">
          <a href="https://reactfpr-1750c.web.app/" target="_blank" rel="noopener noreferrer" className="website">
            Website
          </a>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="code">
            Code
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Img2} alt="Project Thumbnail" className="card-image" />
        <h3>About Me</h3>
        <p>I am a frontend developer with years of experience creating UI/UX interfaces and web pages.</p>
        <div className="card-buttons">
          <a href="https://react1-dd32f.web.app/" target="_blank" rel="noopener noreferrer" className="website">
            Website
          </a>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="code">
            Code
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Img3} alt="Project Thumbnail" className="card-image" />
        <h3>About Me</h3>
        <p>I am a frontend developer with years of experience creating UI/UX interfaces and web pages.</p>
        <div className="card-buttons">
          <a href="https://reactf1-9bdd7.web.app" target="_blank" rel="noopener noreferrer" className="website">
            Website
          </a>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="code">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
