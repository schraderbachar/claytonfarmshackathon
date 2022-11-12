import React from 'react'
import {Nav, Navbar, Container, Image, NavDropdown } from 'react-bootstrap'

import { CgProfile } from 'react-icons/cg';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import logo from "images/logo.jpg"

import "styles/topnavbar.css"

export default function TopNavBar() {
    return (
        <div>
            <Navbar expand="lg" style={{minHeight:"10vh", backgroundColor:"#f6f6f4"}}>
                <Container className="px-5 py-3" fluid>
                    <Navbar.Brand href="/">
                        <Image src={logo} width={"80vh"} height={"50vh"}/>
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
                        <div id="dropdownBottomLeft">
                            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                                <NavDropdown title={<CgProfile size={28}/>}>
                                    <NavDropdown.Item className="DMSansNormal4001422 dropdownItem" href="/account">Account</NavDropdown.Item>
                                    <NavDropdown.Item className="DMSansNormal4001422 dropdownItem" href="/ordersandsubscriptions">Subscriptions & Orders</NavDropdown.Item>
                                    <NavDropdown.Item className="DMSansNormal4001422 dropdownItem" href="#" style={{color:"#DA1E28"}}>Log out</NavDropdown.Item>
                                </NavDropdown>
                                <HiOutlineShoppingBag size={28}/>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
