import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Shreyas Sonar</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
    I love the process of changing a raw idea into a website or a product that impacts lives.
    I want to do work that challenges me as a developer & work that I can be proud of.<br /><br />
    I am fluent in <b>Java, C/C++, C, Python</b> and am working on a few projects in the <b>MERN</b> stack.
    I have expertise in <b>React JS, HTML5, CSS3, JavaScript, Redux, Bootstrap, Node JS, Express JS, SQL, MongoDB</b>.
    Additionally, I have experience with <b>PHP, DBMS, DSA, OOPS</b>.<br />
    I plan to further enhance my skills by learning <b>Next.js</b>, <b>Three.js</b>, and <b>Typescript</b> in the near future. <br /><br />
    Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
</p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home;
