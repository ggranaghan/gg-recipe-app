import React from 'react';


function Form(props) {
    return (
    <div className="formWrapper">
        <div className="form">
            <form onSubmit={props.getRecipe}>
                <input id="search" type="text" name="recipeName" placeholder="type ingredient here" required/><br/>
                <button>Search</button>
            </form>
            <button onClick={props.getRandom}>Get Random Recipe</button>
        </div>
           
            <div className="title">
                <h1>🥕&nbsp;&nbsp;&nbsp;Recipe Book</h1>
                <button id="logout" onClick={props.logout}>Logout</button>
            </div>
        </div>
    );
}

export default Form;