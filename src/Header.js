import React from "react";
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <Navbar bg="dark" sticky="top"  variant="dark">
        <Navbar.Brand href="#home">Shoe Store</Navbar.Brand>
        {/* <Nav className="mr-auto ">
       <Link className="nav-link" to="/" >Home</Link>
        <Link className="nav-link" to="launch">Launch</Link>
        </Nav> */}
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </>
  );
}

export default Header;
