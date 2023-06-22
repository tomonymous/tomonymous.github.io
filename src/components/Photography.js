import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { photos } from "../photos";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { render } from "react-dom";
import Carousel, { Modal, ModalGateway } from "react-images";

export const Photography = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const containerStyle = {
        height: "60vh",
        overflowX: "scroll",
        scrollLeft: "50vw",
    };

    return (
        <section className="photography" id="photography">
            <Container fluid>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <div>
                        <h2 className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>Photography</h2>
                        <p className={isVisible ? "animate__animated animate__flipInX": "preAnimated"}>Some photos I've taken.</p>
                    </div>}
                </TrackVisibility>
                <Col>
                    <div style={containerStyle}>
                    <Gallery photos={photos} onClick={openLightbox} direction="column" columns={3}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
                    </div>
                </Col>
            </Container>
            {/* <img className="background-image-right" src={}></img> */}
        </section>
    )
}
