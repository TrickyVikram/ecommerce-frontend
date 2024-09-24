import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function EcommerceNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="path-to-your-logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Brand logo"
        />{' '}
        E-Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
          <Nav.Link href="#cart">Cart</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#login">Login</NavDropdown.Item>
            <NavDropdown.Item href="#register">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default EcommerceNavbar;
