import { Container, Row, Col, Tab, Nav, Carousel, Ratio } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion"
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import tracklistImg1 from "../assets/img/tracklist-1.jpg";
import tracklistImg2 from "../assets/img/tracklist-2.jpg";
import tracklistImg3 from "../assets/img/tracklist-3.jpg";
import tracklistImg4 from "../assets/img/tracklist-4.jpg";
import recipeImg1 from "../assets/img/recipe-1.jpg"
import recipeImg2 from "../assets/img/recipe-2.jpg"
import water1 from "../assets/img/project-ob1-1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "A Match-3 Puzzle Game",
      description: "Coded with Unity in C#",
      imgUrl: projImg1,
    },
    {
      title: "An Explosive Twist",
      description: "Use weapons and powerups to generate the highest value stones you can within a set number of moves.",
      imgUrl: projImg2,
    },
    {
      title: "Unlocks and Customisation",
      description: "Earn keys to unlock new Power Ups and new skins for the stones.",
      imgUrl: projImg3,
    },
  ];
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  
  return (
    <section className="projects" id="projects">
      <Container size={12}>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2 className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>Projects</h2>
                <p className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>Four coding projects that I've been working on.</p>
              </div>}
            </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">one</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">three</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">four</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col size={12}>
                        <button 
                          role="link"
                          onClick={() => openInNewTab("https://www.tracklistchallenge.com")}
                          onMouseEnter={toggleHover}
                          onAnimationEnd={toggleHover}>
                            The Tracklist Challenge | Try it!
                            <ArrowRightCircle 
                              className={hovered ? "animate__animated animate__zoomOutRight" : ""} 
                              size={25} 
                            />
                        </button>
                        <Carousel wrap="true" interval={null}>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src={tracklistImg1}></img>
                            <Carousel.Caption className="carousel-caption">
                              <p>A website that can create a quiz out of any album using the muscbrainz.org database.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src={tracklistImg2}></img>
                            <Carousel.Caption className="carousel-caption">
                              <p>Coded with the Django Python Web-framework, JavaScript, HTML and CSS.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src={tracklistImg3}></img>
                            <Carousel.Caption className="carousel-caption">
                              <p>Accesses the MusicBrainz database using the musicbrainzngs Python package.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src={tracklistImg4}></img>
                            <Carousel.Caption className="carousel-caption">
                            <p>Users are challenged to list as many tracks that they can within a set amount of time.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                   <button 
                      role="link"
                      onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.DeerlightGames.ComboMatch")}
                      onMouseEnter={toggleHover}
                      onAnimationEnd={toggleHover}>
                        StoneForge | Try it!
                        <ArrowRightCircle 
                          className={hovered ? "animate__animated animate__zoomOutRight" : ""} 
                          size={25} 
                      />
                    </button>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                    <Row>
                      <div class="col-1"></div>
                      <div class="col-10">
                        <Ratio aspectRatio="16x9">
                          <embed className="project-video" src="https://youtube.com/embed/Q1t-XZS7LME?autoplay=0" />
                        </Ratio>
                      </div>
                      <div class="col-1"></div>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h3>Kurumi's Water Assistant</h3>
                    <img className="project-image" src={water1}></img>
                    <p>A chatty, over-engineered, Raspberry Pi powered,  internet enabled robot designed to… keep my dog’s water bowl topped up.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <button 
                      role="link"
                      onClick={() => openInNewTab("https://recipefrog.applikuapp.com/")}
                      onMouseEnter={toggleHover}
                      onAnimationEnd={toggleHover}>
                        Recipe Frog | Try it!
                        <ArrowRightCircle 
                          className={hovered ? "animate__animated animate__zoomOutRight" : ""} 
                          size={25} 
                        />
                    </button>
                    <Row>
                      <Col size={12} sm={12} md={12}>
                        <motion.img 
                          whileHover={{scale: 1.02}}
                          className="project-image" 
                          src={recipeImg1}>
                        </motion.img>
                      </Col>
                      <Col size={12} sm={12} md={12}>
                        <motion.img 
                          whileHover={{scale: 1.02}}
                          className="project-image" 
                          src={recipeImg2}>
                        </motion.img>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
