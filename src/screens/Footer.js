import React from 'react'

// import "styles/Footer.css"
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="py-4" style={{backgroundColor:"black", height:"20vh"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"10px"}}>
        <FaInstagram size={25} color={"#8a3ab9"} />
        <FaFacebook size={25} color={"#3b5998"} />
        <FaTwitter size={25} color={"#00acee"} />
      </div>
      <p className="text-center mt-4" style={{color:"white"}}>© 2022, Clayton Farms - Minnesota Powered by Shopify</p>
    </div>
  )
}
