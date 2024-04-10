import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
        
<p>
    Hello, I'm <b>Shreyas Sonar</b> from India, currently pursuing my Master of Computer Application (MCA) degree. I have a strong background in MERN stack web development and hold a Bachelor's degree in Computer Application (BCA). Experienced in Java, Python, React JS, and more, I've completed training in Java Full Stack Development and hold certifications in MERN Full Stack Development and React JS. During my internship at GoalFi, I honed my skills in software development and Agile methodologies. Passionate about creating projects with elegant designs, some highlights include a Personal Finance Tracker and a Sudoku Game. Besides coding, I enjoy photography. Feel free to connect via <a href="https://www.linkedin.com/in/shreyas-sonar-09a389215/" target='_blank'>LinkedIn</a> for more. 
</p>
        </div>
        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Java' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Php'/>
        <Skills skill='Database'/>

        
      </div>
    </>
  )
}

export default About;
