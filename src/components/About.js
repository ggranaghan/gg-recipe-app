import React from 'react';
import { Link } from "react-router-dom";

const About = () => (
    <div>
        <p>This project is...</p>
        <p><Link to="/recipes">Go back to recipes search</Link></p>
    </div>    
    )

export default About;