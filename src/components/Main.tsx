import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/up-pro" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Saka Habibi</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/up-pro" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;