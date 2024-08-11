import React, { useState } from 'react';
// import Logo from "../logo.svg"
import './header.css'
import { Nav, Navbar, NavDropdown, Offcanvas, Dropdown, Badge, Button } from "react-bootstrap";
import Logo from '../assets/images/IWlogohr.png'
import { useNavigate } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate

  const handleServiceClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(scrollToServiceSection, 500);
  };

  const scrollToServiceSection = () => {
    const aboutSection = document.getElementById('services');
    if (aboutSection) {
      const yOffset = -70;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scroll({ top: y, behavior: 'smooth' });
    }
  }

  const handleRegister = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(scrollToRegisterSection, 500);
  };

  const scrollToRegisterSection = () => {
    const aboutSection = document.getElementById('register');
    if (aboutSection) {
      const yOffset = -70;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scroll({ top: y, behavior: 'smooth' });
    }
  }

  const handleReviews = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(scrollToReviewSection, 500);
  };

  const scrollToReviewSection = () => {
    const aboutSection = document.getElementById('reviews');
    if (aboutSection) {
      const yOffset = -70;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scroll({ top: y, behavior: 'smooth' });
    }
  }

  const handleFaq = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(scrollToFaqSection, 500);
  };

  const scrollToFaqSection = () => {
    const aboutSection = document.getElementById('faqs');
    if (aboutSection) {
      const yOffset = -70;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scroll({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <>

      {/* Mobile Navigation */}
      <div className='onlyMob'>
        <Navbar bg="white" expand="lg" className="mb-3">
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        </Navbar>

        <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasNavbar">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link style={{ color: "black" }} onClick={() => { handleServiceClick(); handleClose(); }}>Services</Nav.Link>
              <Nav.Link style={{ color: "black" }} onClick={() => { handleRegister(); handleClose(); }}>Register</Nav.Link>
              <Nav.Link style={{ color: "black" }} onClick={() => { handleReviews(); handleClose(); }}>Testimonials</Nav.Link>
              <Nav.Link style={{ color: "black" }} onClick={() => { handleFaq(); handleClose(); }}>Faqs</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* Desktop Navigation */}
      <div className='onlyDes'>
        <div className="topsec">
          {/* <div className="logo"
            tabIndex={0}
            role="img"
          >
          </div> */}
          <img src={Logo} alt="Logo" className="logo" />
          <div className="newheader">
            <div className="userDropmenu">
              <p
                onClick={handleServiceClick}
                tabIndex={0}
                aria-label="Services"

              >
                <span>
                  Services

                </span>
              </p>
            </div>

            <div className="userDropmenu">
              <p
                onClick={handleRegister}
                tabIndex={0}

              >

                <span>
                  Register

                </span>

              </p>
            </div>

            <div className="userDropmenu">
              <p
                onClick={handleReviews}
                tabIndex={0}

              >
                <span>
                  Testimonials
                </span>
              </p>
            </div>
            <div className="userDropmenu">
              <p
                onClick={handleFaq}
                tabIndex={0}


              >
                <span>
                  Faq
                </span>
              </p>
            </div>
            {/* <div className="userDropmenu">
              <a
                onClick={handleFaq}
                tabIndex={0}
                aria-label="Academy at home"

              >
                <span>
                  Faq
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>


    </>
  );
}

export default Header;