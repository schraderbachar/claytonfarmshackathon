import React, {useRef} from 'react'
import { Form, Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

import { useAuth } from 'AuthContext.js';

import "styles/LoginPage.css"

export default function LoginPage() {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const emailRef = useRef(null); 
    const passwordRef = useRef(null); 

    
    function onSignIn(){
        if(emailRef?.current?.value.length === 0 || passwordRef?.current?.value.length === 0){
            alert("Please fill out all fields!")
        }
        else{
            signIn(emailRef?.current?.value, passwordRef?.current?.value)
            .then(res => {
                if(res.ok){
                    navigate("/")
                }
                else{
                    alert(res.error)
                }
            })
            .catch(err => {
                alert(err)
            })
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"80vh", width:"100%", backgroundColor:"#f6f6f4"}}>
            <div className="loginForm">
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => onSignIn()}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
