import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

const Navbarcomp =()=>{
    return(
        <div>

    <Navbar className= "mainnavbar" variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand className= "logo"href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="container"
        
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Courses Offered" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Python</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Javascript
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Machine Learning
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className = "loginbutton">Login</Button>
            <Button className="signinbutton">Signin</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

    )
}
export default Navbarcomp;