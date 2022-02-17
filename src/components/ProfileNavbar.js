import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export const ProfileNavbar = () => {
  return (
    <div>
    <Navbar className='py-3' bg="dark" variant="dark">
      <Container>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      <div id='logoContainer'>
        <a href='https://www.facebook.com/klifford.orquillas/' id='logoAdjustments' target="_blank">
        <img src='facebook.png' id="navLogo"/>
        </a>
        <a href='https://github.com/kliffordme' id='logoAdjustments' target="_blank">
        <img src='github.png' id="navLogo"/>
        </a>
        <a href='https://twitter.com/fordorq' id='logoAdjustments' target="_blank">
        <img src='twitter.jpg' className='rounded' id="navLogo"  />
        </a>
      </div>
      </Container>
    </Navbar>


    </div>
  )
}
