import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import water1 from "../assets/img/project-ob1-1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 50
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 50
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };
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
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Stone&shy;Forge</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tracklist Challenge</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">The Auto Dog Bowl</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Recipe Frog</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    <Tab.Pane eventKey="second">
                      <Carousel
                        showDots={true}
                        responsive={responsive}
                        centerMode={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        //deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-20-px"
                      >
                        <div>
                          <img width="99%" src="https://live.staticflickr.com/65535/52848308378_f850a51f52_c_d.jpg"></img>
                          <p>A website that can create a quiz out of any album using the muscbrainz.org database.</p>
                        </div>
                        <div>
                          <img width="99%" src="https://live.staticflickr.com/65535/52848041609_1d6074998b_o_d.jpg"></img>
                          <p>Coded with the Django Python Web-framework, JavaScript, HTML and CSS.</p>
                        </div>
                        <div>
                          <img width="99%" src="https://live.staticflickr.com/65535/52847852166_c5728b4949_o_d.jpg"></img>
                          <p>Accesses the MusicBrainz database using the musicbrainzngs Python package.</p>
                        </div>
                        <div>
                          <img width="99%" src="https://live.staticflickr.com/65535/52848248355_259e8a4d77_k_d.jpg"></img>
                          <p>Users are shown the album art and number of tracks and are challenged to list as many tracks that they can within a set amount of time.</p>
                        </div>
                        <div>
                          <img width="99%" src="https://live.staticflickr.com/65535/52848039169_01d9bc2cfb_k_d.jpg"></img>
                          <p>A website that can create a quiz out of any album using the muscbrainz.org database.</p>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Kurumi's Water Assistant</h3>
                      <img className="project-image" src={water1}></img>
                      <p>A chatty, over-engineered, Raspberry Pi powered,  internet enabled robot designed to… keep my dog’s water bowl topped up.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
