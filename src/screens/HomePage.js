import React from 'react'
import { Carousel } from 'react-bootstrap'

import image1 from "images/image1.jpeg"
import image2 from "images/image2.jpg"
import image3 from "images/image3.jpg"
import image4 from "images/image4.webp"

import "styles/homepage.css"

export default function HomePage() {
  return (
    <div>
        <Carousel style={{height:"90vh"}}>
            <Carousel.Item>
                <div className="" style={{backgroundImage: `url(${image1})`, backgroundSize:"cover", backgroundPosition:"center", height:"90vh", width:"100vw"}} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="" style={{backgroundImage: `url(${image2})`, backgroundSize:"cover", backgroundPosition:"center", height:"90vh", width:"100vw"}} />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="" style={{backgroundImage: `url(${image3})`, backgroundSize:"cover", backgroundPosition:"center", height:"90vh", width:"100vw"}} />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className='py-5 px-5' style={{minHeight:"100vh"}}>
            <div>
                <h1>What We're Growing</h1>
                <div className="scrolling-wrapper" style={{display:"flex", overflowX:"auto", flexWrap:"nowrap", gap:"12.4vw", scrollbarWidth:"0px"}}>
                    <ProduceCard />
                    <ProduceCard />
                    <ProduceCard />
                    <ProduceCard />
                    <ProduceCard />
                    <ProduceCard />
                    <ProduceCard />
                </div>
            </div>
        </div>
    </div>
  )
}


function ProduceCard() {
  return (
    <div>
        <div className="" style={{backgroundImage: `url(${image4})`, backgroundSize:"cover", backgroundPosition:"center", height:"20vh", width:"20vh"}} />
        <p className='text-center mb-0'>Name</p>
        <p className='text-center mb-0'>$8.50 USD</p>
    </div>
  )
}

