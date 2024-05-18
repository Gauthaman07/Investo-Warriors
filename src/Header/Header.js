import React, { useState } from 'react';
// import Logo from "../logo.svg"
import './header.css'
import { Nav, Navbar, NavDropdown, Offcanvas, Dropdown, Badge } from "react-bootstrap";
import Logo from '../assets/images/IWlogohr.png'

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <>
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
              <a
                to="/sport"
                tabIndex={0}
                aria-label="Sports"

              >
                <span>
                  Services

                </span>
              </a>
            </div>
            <div className="userDropmenu">
              <a
                to="/academyathome"
                tabIndex={0}
                aria-label="Academy at home"

              >
                <span>
                  Performance
                </span>
              </a>
            </div>
            <div className="userDropmenu">
              <a
                to="/tryit-forfree"
                tabIndex={0}
                aria-label="Try it for free"
              >

                <span>
                  Register

                </span>

              </a>
            </div>

            <div className="userDropmenu">
              <a
                to="/tourism"
                tabIndex={0}
                aria-label="Tourism"
              >


                <span>
                  Testimonials

                </span>

              </a>
            </div>



          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='onlyMob'>
        <Navbar style={{ marginRight: '50px' }} expand="lg" bg="white" variant="white" expanded={expanded}>
          <Navbar.Brand href="#">
            {/* Add your logo here */}
            <img style={{ marginLeft: '50px' }} src={Logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/sport" onClick={toggleMenu}>Services</Nav.Link>
              <Nav.Link href="/academyathome" onClick={toggleMenu}>Performance</Nav.Link>
              <Nav.Link href="/tryit-forfree" onClick={toggleMenu}>Register</Nav.Link>
              <Nav.Link href="/tourism" onClick={toggleMenu}>Testimonials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;