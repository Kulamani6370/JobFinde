// import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Are you ready to supercharge your job search and discover the career
            of your dreams? Look no further than our cutting-edge Job Finder
            App! We have revolutionized the job hunting experience to make it
            faster, smarter, and more efficient than ever before. With our
            user-friendly interface, you can browse thousands of job listings
            tailored to your skills and preferences, all in one place. Our
            advanced algorithms match you with the perfect opportunities, so you
            never miss out on a great job again.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Demo User/ Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
