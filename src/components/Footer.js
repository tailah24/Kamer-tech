import React from 'react'
import '../Css/Footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare} from 'react-icons/fa'

function Footer() {
    return (
        <div>
        <div className='footer'>
        <h1 className='keep'>Keep in touch</h1>
        <div className='social-icons'>
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitterSquare />

        </div>
        </div>
        </div>
    )
}

export default Footer