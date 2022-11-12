import React, { useState } from 'react'

import {Modal, Form, Button, Col, Row } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai';

import { MdDeleteForever } from 'react-icons/md';

import "styles/accountpage.css"

export default function AccountPage() {
    const [showModal, setShowModal] = useState(false)

  return (
    <div style={{minHeight:"70vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            backdrop="static"
            keyboard={true}
            dialogClassName="modalWidthStyle"
        >
            <Modal.Header className="px-4 pt-4" closeButton>
                <Modal.Title className="" style={{color:"#000000"}}>Manage Address</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5 pb-4">
                <Form>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"end", alignItems:"end"}}>
                        <MdDeleteForever size={25} color={"red"}/>
                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="John" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="doe" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="company">
                        <Form.Label>Company</Form.Label>
                        <Form.Control placeholder="Clayton farms" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address line 1 </Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address line 2 </Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Country</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Province</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <div className="mt-5" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <Button variant="outline-dark" type="submit">
                            Add New
                        </Button>
                        <Button variant="dark" type="submit">
                            Update
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
        <div style={{width:"90%", display:"flex", flexDirection:"row", justifyContent:"end", alignItems:"end"}}>
            <div onClick={() => setShowModal(true)} style={{display:"flex", flexDirection:"row"}}>
                <AiOutlineEdit size={25} />
                <p className="mb-0 ms-2" >Manage address</p>
            </div>
        </div>
        <div style={{width:"80vh"}}>
            <h1 className='text-center mb-4'>Account info</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control size='lg' type="text" placeholder="John" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control size='lg' type="text" placeholder="Doe" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control size='lg' placeholder="+123456789" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control size='lg' placeholder="hello@gmail.com" />
                </Form.Group>

                <div className="mt-5" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <Button variant="outline-dark" >
                        Cancel
                    </Button>
                    <Button variant="dark">
                        Update
                    </Button>
                </div>
            </Form>
        </div>
    </div>
  )
}
