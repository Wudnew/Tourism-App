import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css'; 
import unique1 from '../images/unique1.jpg'
import unique2 from '../images/unique2.jpg'


const AboutPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/'); 
  };

  return (
    <div className="homepage-container">
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>Explore Ethiopia: A Journey through Culture and Nature</h1>
          <p>Join us on an unforgettable adventure!</p>
          <button className="hero-button" onClick={handleExploreClick}>
            Back to Home
          </button>
        </div>
      </div>

      <section className="about-us-section">
        <h2>About Us</h2>
        <p>
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage. Our mission is to showcase the unique beauty and culture of Ethiopia to the world.
        </p>
      </section>

      <section className="explore-section">
        <h2>Discover Unique Places</h2>
        <div className="explore-grid">
          <div className="explore-card">
            <img src={unique1} alt="unique place" />
            <h3>Dallol</h3>
            <p>Unusual Attractions in Ethiopia.</p>
          </div>
          <div className="explore-card">
            <img src={unique2} alt="unique plac"/>
            <h3>The Blue Nile</h3>
            <p>The Nile is a major north-flowing river in northeastern Africa.</p>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-social-icons">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
