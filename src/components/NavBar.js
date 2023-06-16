import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function NavBar() {
let navigate=useNavigate()

  return <>
  <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Blog App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/home")}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate("/manageblog")}>Manage</Nav.Link>
            <Nav.Link onClick={()=>navigate("/create")}>Create</Nav.Link>
            <Nav.Link onClick={()=>navigate("/test")}>Test</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
  
  
  </>
}

export default NavBar
