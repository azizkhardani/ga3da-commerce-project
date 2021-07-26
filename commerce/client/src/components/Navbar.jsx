import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";


const  Navbare =()=> {
  
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Gaada Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Login</Nav.Link>
              <Nav.Link href="#action2">Sign Up</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> Tech </NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Sports </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Cars </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  
}

export default Navbare
