import React from "react";
import "./project.css";
import Img1 from "../../assets/Screenshot-1.png";
import Img2 from "../../assets/Screenshot-2.png";
import Img3 from "../../assets/Screenshot-3.png";

const Project = () => {
  return (
    <div className="project-section">
      <div className="project-header">
        <h1 className="project-title">My Projects</h1>
        <p className="project-subtitle">
          My Awesome Work
        </p>
      </div>

      <div className="grid-container">
        <div className="card">
          <img src={Img1} alt="Project Thumbnail" className="card-image" />
          <div className="card-buttons">
            <a
              href="https://reactfpr-1750c.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
              Website
            </a>
            <a
              href="https://github.com/jayramani96/React-Js/tree/ea548694a9f3a2f10fbec89f461a5b902de11031/Admin2"
              target="_blank"
              rel="noopener noreferrer"
              className="code"
            >
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <img src={Img2} alt="Project Thumbnail" className="card-image" />
          <div className="card-buttons">
            <a
              href="https://react1-dd32f.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
              Website
            </a>
            <a
              href="https://github.com/jayramani96/React-Js/tree/ea548694a9f3a2f10fbec89f461a5b902de11031/38%5D%20Redux_Api_Fetch"
              target="_blank"
              rel="noopener noreferrer"
              className="code"
            >
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <img src={Img3} alt="Project Thumbnail" className="card-image" />
          <div className="card-buttons">
            <a
              href="https://reactf1-9bdd7.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
              Website
            </a>
            <a
              href="https://github.com/jayramani96/React-Js/tree/ea548694a9f3a2f10fbec89f461a5b902de11031/27%5DLandingPage-PR"
              target="_blank"
              rel="noopener noreferrer"
              className="code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
