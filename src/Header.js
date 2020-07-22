import React from "react";
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <Navbar bg="dark" style={{height:"60px",padding:'0px'}}   variant="dark">
        <div style={{textAlign:'center',width:'100%',color:'white',fontSize:'30px'}}> <img src="logo.jpg" width="160" /></div>
      </Navbar>
    </>
  );
}

export default Header;
