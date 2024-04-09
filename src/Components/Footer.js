import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2024 SS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Shreyasssonar" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shreyas-sonar-09a389215/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:shryeassonar007@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer