import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { photos } from "../photos";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Photography = () => {

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
                        <Gallery photos={photos} direction="column" columns={4} />
                    </div>
                </Col>
            </Container>
            {/* <img className="background-image-right" src={}></img> */}
        </section>
    )
}
