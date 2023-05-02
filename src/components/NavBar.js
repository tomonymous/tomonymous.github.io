import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const scrollToConnect = () => {
        const element = document.getElementById('connect');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } 
    }

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Brand href="/">
                <img className="navbar-logo" src={logo} alt="Thomas" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Tools</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/thomas-cheung-a0a9471a1/" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/tomonymous" target="_blank"><img src={navIcon2} alt=""/></a>
                        <a href="https://www.instagram.com/tomonymous/" target="_blank"><img src={navIcon3} alt="" /></a>
                    </div>
                    <button onClick={scrollToConnect} className="vvd"><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}