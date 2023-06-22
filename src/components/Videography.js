import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ReactPlayer from "react-player";
import "swiper/css/navigation";

// import required modules

export const Videography = () => {
  const [swiper, setSwiper] = useState(null);
  const [slideHeight, setSlideHeight] = useState(35);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let height = 50;
      if(screenWidth < 500){
        height = 35;
      }
      else if(screenWidth > 1536){
        height = 75;
      }
      else{
        height = (screenWidth-500)/26+35;
      }
      setSlideHeight(height);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = useCallback(() => {
    if (swiper) {
      swiper.update();
    }
  }, [swiper]);

  const videoList = [
    {
      url: "https://player.vimeo.com/video/337720564",
      aspectRatio: 16 / 9,
    },
    {
      url: "https://www.youtube.com/watch?v=4TUp05al-1A",
      aspectRatio: 16 / 9,
    },
    {
      url: "https://www.youtube.com/shorts/4ncy2oZL7j8",
      aspectRatio: 9 / 16,
    },
    {
        url: "https://www.youtube.com/shorts/YEzFych7g6g",
        aspectRatio: 9 / 16,
    },
    {
        url: "https://vimeo.com/329708414",
        aspectRatio: 16 / 9,
      },
    {
      url: "https://www.youtube.com/watch?v=KUg5eq2FBJA",
      aspectRatio: 16 / 9,
    },
    {
        url: "https://vimeo.com/420136896",
        aspectRatio: 16 / 9,
      },
    {
        url: "https://www.youtube.com/watch?v=Q1t-XZS7LME",
        aspectRatio: 16 / 9,
    },
    {
        url: "https://www.youtube.com/shorts/cC74no0cLTg",
        aspectRatio: 9 / 16,
    },
    {
        url: "https://vimeo.com/208741994",
        aspectRatio: 9 / 16,
    },
    {
        url: "https://vimeo.com/286271770",
        aspectRatio: 16 / 9,
    },
  ];

  const VideoSlide = ({ url, aspectRatio }) => (
    <div
      style={{
        width: `${slideHeight * aspectRatio}vh`,
        height: `${slideHeight}vh`,
        position: "relative",
      }}
    >
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );

  return (
    <section className="videography" id="videography">
      <Container fluid>
        <TrackVisibility>
          {({ isVisible }) => (
            <div>
              <h2
                className={
                  isVisible
                    ? "animate__animated animate__flipInX"
                    : "preAnimated"
                }
              >
                Videos
              </h2>
              <p
                className={
                  isVisible
                    ? "animate__animated animate__flipInX"
                    : "preAnimated"
                }
              >
                Some of the videos I've made.
              </p>
            </div>
          )}
        </TrackVisibility>
        <Col>
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {videoList.map(({ url, aspectRatio }, index) => (
              <SwiperSlide key={index}>
                <VideoSlide url={url} aspectRatio={aspectRatio} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Container>
      {/* <img className="background-image-right" src={}></img> */}
    </section>
  );
};