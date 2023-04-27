import { Container, Row, Col, Tab, Nav, Carousel, Ratio } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import water1 from "../assets/img/project-ob1-1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  
  return (
    <section className="projects" id="projects">
      <Container size={12}>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2 className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>Projects</h2>
                <p className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>What I've been working on.</p>
              </div>}
            </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">The Album Quiz</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Stone&shy;Forge</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">The Auto Dog Bowl</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Recipe Frog</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col size={12}>
                        <Carousel wrap="true" interval={null}>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src="https://live.staticflickr.com/65535/52848308378_f850a51f52_c_d.jpg"></img>
                            <Carousel.Caption className="carousel-caption">
                              <p>A website that can create a quiz out of any album using the muscbrainz.org database.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src="https://live.staticflickr.com/65535/52848041609_1d6074998b_o_d.jpg"></img>
                            <Carousel.Caption className="carousel-caption">
                              <p>Coded with the Django Python Web-framework, JavaScript, HTML and CSS.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src="https://live.staticflickr.com/65535/52847852166_c5728b4949_o_d.jpg"></img>
                            <Carousel.Caption className="carousel-caption">
                              <p>Accesses the MusicBrainz database using the musicbrainzngs Python package.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item className="carousel-item">
                            <img className="carousel-img" src="https://live.staticflickr.com/65535/52848248355_259e8a4d77_k_d.jpg"></img>
                            <Carousel.Caption className="carousel-caption">
                            <p>Users are challenged to list as many tracks that they can within a set amount of time.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h3>Kurumi's Water Assistant</h3>
                    <img className="project-image" src={water1}></img>
                    <p>A chatty, over-engineered, Raspberry Pi powered,  internet enabled robot designed to… keep my dog’s water bowl topped up.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
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
                </Tab.Content>
              </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
