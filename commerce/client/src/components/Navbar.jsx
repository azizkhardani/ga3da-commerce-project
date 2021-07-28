import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap" ;


const  Navbare =(props)=> {
  
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand >Ga3da Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={()=>props.changeView('login')}>Login</Nav.Link> 
              <Nav.Link onClick={()=>props.changeView('signup')}>Signup</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={()=>props.changeView('profil')}>Profil</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <Nav.Link onClick={()=>props.changeView('basket')}>Basket</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  
}

export default Navbare
