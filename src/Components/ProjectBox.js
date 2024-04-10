import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Personal Finance Tracker": {
      description: "Designed a user-friendly interface using Ant Design. Implemented secure user authentication through Google login. Resulted in a 25% increase in user engagement and a 30% improvement in data security. Technology and Language: React JS, Redux, HTML5, CSS3.",
      githubLink: "",
      websiteLink: "https://personal-finance-tracker-chi.vercel.app/",
      imgUrl: "https://assets.ycodeapp.com/assets/app18525/images/P2Li2UomEk3FMao2CxeXug4wbtpeN0QJJmh2QrGy-published.webp"
    },
    "Sudoku Game": {
      description: "Developed engaging GUI and efficient algorithms for solving Sudoku puzzles. Resulted in a 40% increase in user retention and a 20% enhancement in gameplay functionality. Language and Technology: Java, Java Swing.",
      githubLink: "https://github.com/Shreyasssonar/SUDOKU",
      websiteLink: "",
      imgUrl: "https://gamerules.com/wp-content/uploads/Sudoku-1-750x422.jpg"
    },
    "YouTube Clone": {
      description: "Integrated YouTube API for efficient video searching. Ensured cross-device compatibility, resulting in a 15% boost in satisfaction. Language and Technologies: HTML, CSS, JavaScript.",
      githubLink: "",
      websiteLink: "https://shreyasssonar.github.io/Youtube/",
      imgUrl: "https://images.indianexpress.com/2023/05/youtube-logo-featured.jpg"
    },
    "Airbnb-clone": {
      description: "Description for Airbnb clone project.",
      githubLink: "",
      websiteLink: "https://shreyasssonar.github.io/Airbnb-clone/",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVgMT7RWCLJmAaOLUVWSwkTMlTeLKEzoC5mA_t9qVfw&s"
    }
  };

  let showGithubButton = '';
  if (desc[projectName].githubLink === "") {
    showGithubButton = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={desc[projectName].imgUrl} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName].description}
        <br />

        <a style={{ display: showGithubButton }} href={desc[projectName].githubLink} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName].websiteLink} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox;
