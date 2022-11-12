import React from 'react'
import {Nav, Navbar, Container, Form, Button, Image } from 'react-bootstrap'

import { FaSearch, FaSignOutAlt } from 'react-icons/fa';

import { useAuth } from '../AuthContext.js';

// import logo from "images/logo512.png";

export default function TopNavBar({searchValue, setSearchValue}) {
    const { signOut, currentUser } = useAuth();

    function onSignOut(){
        signOut()
        .then(res=> {
            if(res.ok){
                alert("You're signed out!")
            }
        })
    }

    return (
        <div>
            <Navbar expand="lg" style={{minHeight:"10vh", backgroundColor:"#f6f6f4"}}>
                <Container className="px-4 py-4" fluid>
                    <Navbar.Brand href="/">
                        Claytonfarmhack
                        {/* <Image src={logo} width={"100vh"} height={"100vh"}/> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="w-100 mb-3 mb-sm-0 justify-content-center ms-lg-5 ps-lg-5 ms-2"
                            style={{ maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link className="" href="/">Home</Nav.Link>
                            <Nav.Link className="" href="/">Choose Your Greens</Nav.Link>
                            <Nav.Link className="" href="/">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex flex-row">
                            <Form.Control
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{border:"none", borderBottom:"1px solid black", borderRadius:"0", background:"none"}}
                            />
                            <Button variant=""><FaSearch /></Button>
                            {currentUser && <Button variant="danger" onClick={() => onSignOut()}><FaSignOutAlt className='mb-1' /></Button>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
