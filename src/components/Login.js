import React from 'react';

const Login = (props) => (
    <div class="login">
        <form type="text" onSubmit={props.checkAuth}>
            <label for="uname"><b>Username</b></label><br/>
            <input type="text" placeholder="Enter Username" name="uname" required/><br/>
            <label for="psw"><b>Password</b></label><br/>
            <input type="password" placeholder="Enter Password" name="psw" required/><br/>
            <button type="submit">Login</button>
        </form>
    </div> 
    )

export default Login;