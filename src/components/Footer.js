import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => (
    <div class="footer">
        <p>Made by Gregory Granaghan</p>
        <p><Link to="/about">About</Link></p>
    </div>    
    )

export default Footer;