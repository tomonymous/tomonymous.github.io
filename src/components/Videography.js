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
import thumbnail1 from "../assets/img/videoThumbs/DeerlightAnneke.avif"
import thumbnail2 from "../assets/img/videoThumbs/Cafelat.jpg"
import thumbnail3 from "../assets/img/videoThumbs/Seoul.jpg"
import thumbnail4 from "../assets/img/videoThumbs/Negatives.jpg"
import thumbnail5 from "../assets/img/videoThumbs/DeerlightMel.avif"
import thumbnail6 from "../assets/img/videoThumbs/Waiatarua.jpg"
import thumbnail7 from "../assets/img/videoThumbs/DeerlightRenisa.avif"
import thumbnail8 from "../assets/img/videoThumbs/Stoneforge.webp"
import thumbnail9 from "../assets/img/videoThumbs/Sunny.jpg"
import thumbnail10 from "../assets/img/videoThumbs/CottonRepublic.jpg"
import thumbnail11 from "../assets/img/videoThumbs/DeerlightCalista.avif"
// import required modules

export const Videography = () => {
  const [swiper, setSwiper] = useState(null);
  const [slideHeight, setSlideHeight] = useState(25);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let height = 50;
      if(screenWidth < 500){
        height = 25;
      }
      else if(screenWidth > 1536){
        height = 75;
      }
      else{
        height = (screenWidth-393)/23+25;
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
      thumbnail: thumbnail1,
    },
    {
      url: "https://www.youtube.com/watch?v=4TUp05al-1A",
      aspectRatio: 16 / 9,
      thumbnail: thumbnail2,
    },
    {
      url: "https://www.youtube.com/shorts/4ncy2oZL7j8",
      aspectRatio: 9 / 16,
      thumbnail: thumbnail3,
    },
    {
        url: "https://www.youtube.com/shorts/YEzFych7g6g",
        aspectRatio: 9 / 16,
        thumbnail: thumbnail4,
    },
    {
        url: "https://vimeo.com/329708414",
        aspectRatio: 16 / 9,
        thumbnail: thumbnail5,
      },
    {
      url: "https://www.youtube.com/watch?v=KUg5eq2FBJA",
      aspectRatio: 16 / 9,
      thumbnail: thumbnail6,
    },
    {
        url: "https://vimeo.com/420136896",
        aspectRatio: 16 / 9,
        thumbnail: thumbnail7,
      },
    {
        url: "https://www.youtube.com/watch?v=Q1t-XZS7LME",
        aspectRatio: 16 / 9,
        thumbnail: thumbnail8,
    },
    {
        url: "https://www.youtube.com/shorts/cC74no0cLTg",
        aspectRatio: 9 / 16,
        thumbnail: thumbnail9,
    },
    {
        url: "https://vimeo.com/839173444",
        aspectRatio: 9 / 16,
        thumbnail: thumbnail10,
    },
    {
        url: "https://vimeo.com/286271770",
        aspectRatio: 16 / 9,
        thumbnail: thumbnail11,
    },
  ];

  const VideoSlide = ({ url, aspectRatio, thumbnail }) => (
    <div className='player-wrapper'
      style={{
        width: `${slideHeight * aspectRatio}vh`,
        height: `${slideHeight}vh`,
        position: "relative",
        paddingTop: '56.5%',
      }}
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        light={<img src={thumbnail}/>}
        controls="true"
        className='react-player'
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
            grabCursor={false}
            watchSlidesProgress={true}
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
            //className="mySwiper"
          >
            {videoList.map(({ url, aspectRatio, thumbnail }, index) => (
              <SwiperSlide key={index}>
                <VideoSlide url={url} aspectRatio={aspectRatio} thumbnail={thumbnail} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Container>
      {/* <img className="background-image-right" src={}></img> */}
    </section>
  );
};