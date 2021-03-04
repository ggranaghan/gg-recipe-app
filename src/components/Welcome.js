import React from 'react';
import Login from './Login';
import Footer from './Footer';

const Welcome = (props) => (
    <div>
    {
        !props.clicked && 
        <div className="welcome">
            <h1>🥕&nbsp;&nbsp;&nbsp;Recipe Book</h1>
            <h3>Welcome! Log in below and you will be redirected to the recipes page.</h3>
            <p>(any username and password will log you in)</p>
        </div>
    } 
    <Login checkAuth={props.checkAuth}/>   
    <Footer />
    </div>
        
    )

export default Welcome;