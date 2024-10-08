import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { Carousel, Button, Card, Row, Col, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; // For social media icons

import aksum from '../images/aksum.jpg';
import bale from '../images/bale.jpg';
import dakil from '../images/dakil.jpg';
import gonder from '../images/gonder.jpg';
import harar from '../images/harar.jpg';
import lalibela from '../images/lalibela.jpg';
import omo from '../images/omo.jpg';
import semen from '../images/semen.jpg';
import gheralta from '../images/gheralta.jpg'
import fullScreenImage from '../images/fullScreenImage.jpg';




import culturalAdventure from '../images/culturalAdventure.jpg';
import naturalAdventure from '../images/naturalAdventure.jpg';
import outdoorAdventure from '../images/outdoorAdventure.jpg';
import religiousExperience from '../images/religiousExperience.jpg';
import cultureImage from '../images/cultureImage.png'; // New culture image
//import additionalImage from '../images/additionalImage.png'; // New additional image

// Carousel data
const carouselData = [
  { src: lalibela, title: 'Lalibela', description: 'A Timeless marvel of rock-hewn churches' },
  { src: aksum, title: 'Aksum', description: 'The ruins of an ancient Ethiopian city.' },
  { src: bale, title: 'Bale Mountains', description: 'Explore the natural beauty of Bale.' },
  { src: dakil, title: 'Danakil Depression', description: 'One of the hottest places on earth.' },
  { src: gonder, title: 'Gonder', description: 'Visit the Royal Enclosure in Gonder.' },
  { src: harar, title: 'Harar', description: 'Discover the ancient walled city of Harar.' },
  { src: omo, title: 'Omo Valley', description: 'The vibrant culture of Omo Valley.' },
  { src: semen, title: 'Simien Mountains', description: 'Breathtaking views of Ethiopia\'s mountain ranges.' }
];
const destinations = [
  {
    img: gonder,
    title: 'Gondar',
    description: 'Camelot of Africa',
  },
  {
    img: harar,
    title: 'Harar',
    description: 'The old walled city',
  },
  {
    img: lalibela,
    title: 'Lalibela',
    description: 'The rock-hewn churches',
  },
  {
    img: aksum,
    title: 'Aksum',
    description: 'Land of Queen Sheba',
  },
 
];
const activities = [
  {
    img: culturalAdventure,
    title: 'Cultural Adventures',
    description: 'Vibrant cultural adventures, where ancient traditions and unique customs come to life.',
  },
  {
    img: naturalAdventure,
    title: 'Natural Adventures',
    description: 'From trekking through the rugged Simien Mountains to exploring otherworldly landscapes.',
  },
  {
    img: outdoorAdventure,
    title: 'Outdoor and Adventure',
    description: 'Outdoor and adventure are the eliciting factors.',
  },
  {
    img: religiousExperience,
    title: 'Religious Experience',
    description: 'Profound spiritual heritage through ancient churches and sacred sites.',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

const handleButtonClick = (e) => {
        e.stopPropagation(); 
        navigate('/about'); 
    };
  return (
    <div className="home-container">
      <Carousel>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img
                className="d-block w-100"
                src={item.src}
                alt={item.title}
              />
            <h1 className="Titil-text">Explore Ethiopia</h1>

             
             <div onClick={(e) => e.stopPropagation()}>
        <Button
        className="top-right-button"
        onClick={handleButtonClick}
    >
        About Us
    </Button>
</div>

              <Carousel.Caption className="carousel-caption-custom">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button className="bottom-left-button" onClick={() => navigate('/about')}>
                  Learn More
                </Button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="activities-section">
        <h2 className="text-center my-4">Activities to explore in Ethiopia</h2>
        <Row>
          {activities.map((activity, index) => (
            <Col key={index} md={3} className="d-flex">
              <Card className="activity-card">
                <Card.Img variant="top" src={activity.img} />
                <Card.Body>
                  <Card.Title>{activity.title}</Card.Title>
                  <Card.Text>{activity.description}</Card.Text>
                  <Button variant="outline-danger" onClick={() => navigate('/learn-more')}>
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      <Container className="cultural-section text-center my-5">
        <h2>Visit Amazing Culture In Ethiopia</h2>
        <img src={cultureImage} alt="Cultural Display" className="img-fluid my-12" />
        <p>
          Visiting Ethiopia offers an extraordinary journey into a land where culture thrives in every aspect of life. From the ancient rituals of the Orthodox Christian faith, showcased in the stunning rock-hewn churches of Lalibela, to the rich musical and dance traditions of diverse ethnic groups, Ethiopia’s cultural tapestry is both vibrant and deeply rooted in history.
        </p>
        <Button variant="danger" onClick={() => navigate('/explore-culture')}>EXPLORE MORE</Button>
      </Container>


      <Container className="destinations-section my-5">
        <h2 className="text-center">Must-See Destinations to Experience in Your Lifetime</h2>
        <Row>
          {destinations.map((destination, index) => (
            <Col key={index} md={3} className="d-flex">
              <Card className="destination-card mb-4">
                <Card.Img variant="top" src={destination.img} />
                <Card.Body>
                  <Card.Title>{destination.title}</Card.Title>
                  <Card.Text>{destination.description}</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      
    <Container className="special-sections my-5">
        <Row>
          {/* Omo Section */}
          <Col md={6} className="text-center mb-3">
            <Card className="special-card">
              <Card.Img variant="top" src={omo} /> {/* Omo Valley Image */}
              <Card.Body>
                <Card.Title>Omo Valley</Card.Title>
                <Card.Text>
                  The Omo Valley is home to 200,000 people divided up into 80 tribes, speaking 47 different languages. These nations exhibit a fascinating range of cultural practices.
                </Card.Text>
                <Button variant="danger" onClick={() => navigate('/omo-valley')}>LEARN MORE</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Gheralta Section */}
          <Col md={6} className="text-center mb-3">
            <Card className="special-card">
              <Card.Img variant="top" src={gheralta} /> {/* Gheralta Image */}
              <Card.Body>
                <Card.Title>Gheralta</Card.Title>
                <Card.Text>
                  Gheralta, located near Hawzen, boasts breathtaking mountain ranges and more than 35 remarkable rock-cut churches. Discover Ethiopia's oldest and most exquisite mountain churches.
                </Card.Text>
                <Button variant="danger" onClick={() => navigate('/gheralta')}>LEARN MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="featured-image-section text-center my-5">
        <img src={fullScreenImage} alt="Ethiopian Landscape" className="img-fluid" />
        <div className="featured-text">
          <h2>Endangered camel caravans of the Ethiopian salt mines</h2>
          <p>
          Salt miners ply an ancient and gruelling trade in Ethiopia’s northeastern Danakil Depression, one of the hottest and lowest places on Earth.
Danakil contains vast salt flats as well as sulphur springs and rumbling volcanoes created by the grinding of three tectonic plates.
          </p>
          <Button variant="danger" onClick={() => navigate('/explore-more')}>EXPLORE MORE</Button>
        </div>
      </div>

      <footer className="footer text-center my-5">
        <h5>Follow Us</h5>
        <div className="social-icons">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" className="mx-2" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
          </a>

          
        </div>
        <div className="footer-info">
          <p>📞 Contact Us: wuditlema@gmail.com.com</p>
          <p>📍 Address: 123 A,A, Ethiopia</p>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Widnew Birhanu. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
