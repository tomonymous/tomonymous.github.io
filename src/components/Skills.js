import javaScriptImg from "../assets/img/logos/javascript.png";
import cssImg from "../assets/img/logos/css.png";
import cSharpImg from "../assets/img/logos/c-sharp.png";
import reactImg from "../assets/img/logos/react.png";
import luaImg from "../assets/img/logos/lua.png";
import githubImg from "../assets/img/logos/github.png";
import htmlImg from "../assets/img/logos/html.png";
import unityImg from "../assets/img/logos/unity.png";
import pythonImg from "../assets/img/logos/python.png";
import raspberryPiImg from "../assets/img/logos/raspberry-pi.png";
import bootstrapImg from "../assets/img/logos/bootstrap.png";
import photoshopImg from "../assets/img/logos/photoshop.png";
import lightroomImg from "../assets/img/logos/lightroom.png";
import afterEffectsImg from "../assets/img/logos/afterEffects.png";
import premiereProImg from "../assets/img/logos/premiere-pro.png";
import davinciImg from "../assets/img/logos/davinci.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
      }
    };
    const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
    return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                    <div className="skill-bx wow zoomIn">
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div>
                                <h2 className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>Tools</h2>
                                <p className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>What I've been working with.</p>
                            </div>}
                        </TrackVisibility>
                        <Carousel responsive={responsive} autoPlay autoPlaySpeed={2000} infinite={true}  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javaScriptImg} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={cSharpImg} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={pythonImg} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={unityImg} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={raspberryPiImg} alt="Image" />
                                <h5>Raspberry Pi</h5>
                            </div>
                            <div className="item">
                                <img src={reactImg} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={htmlImg} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssImg} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrapImg} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={luaImg} alt="Image" />
                                <h5>lua</h5>
                            </div>
                            <div className="item">
                                <img src={githubImg} alt="Image" />
                                <h5>GitHub</h5>
                            </div>                        
                        </Carousel>
                        <Carousel responsive={responsive2} autoPlay autoPlaySpeed={2000} infinite={true}  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={photoshopImg} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={lightroomImg} alt="Image" />
                                <h5>Lightroom</h5>
                            </div>
                            <div className="item">
                                <img src={premiereProImg} alt="Image" />
                                <h5>Premiere Pro</h5>
                            </div>
                            <div className="item">
                                <img src={davinciImg} alt="Image" />
                                <h5>Davinci Resolve</h5>
                            </div>
                            <div className="item">
                                <img src={afterEffectsImg} alt="Image" />
                                <h5>After Effects</h5>
                            </div>                 
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}