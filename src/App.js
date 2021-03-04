
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import About from './components/About';
import Recipes from './components/Recipes';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
require('dotenv').config();


const apiKey = process.env.REACT_APP_API_KEY;


const App = () => {
  
  const [recipe, setRecipe] = useState([]);
  const [random, setRandom] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [clicked, setClick] = useState(false);
  const [auth, setAuth] = useState(false);
  
  useEffect(() => { 
    console.log(recipe)
  }, [recipe])


  const checkAuth = (e) => {
    e.preventDefault();
    const userName = e.target.elements.uname.value;
    const password = e.target.elements.psw.value;  
    setAuth(true);
    document.cookie = 'true'
    document.cookie = `username=${userName}`
    document.cookie = `password=${password}`
    window.location.href = "/recipes";
  }

  const logout = () => {
    document.cookie = ''
    setAuth(false);
    window.location.href = "/";
  }

  const getRecipe = async (e) => {
    setClick(true)
    e.preventDefault();
    setRandom([])
    const recipeName = e.target.elements.recipeName.value; 
    const api_call = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${recipeName}&apiKey=${apiKey}`);
    const data = await api_call.json()
    if (data.length) {
      setErrorMessage();
      setRecipe(data)
    } else {
      setErrorMessage("Hmmm, no results. Try again.");
      setRecipe([]);
      setRandom(undefined);
    }
  }

  const getRandom = async () => {
    document.getElementById("search").style.animationName = "null";
    setRecipe([])
    setClick(true)
    const api_call = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`);
    const data = await api_call.json()
    if (data.recipes) {
      setErrorMessage();
      setRandom(data.recipes);
      setRecipe([]);
    } else {
      setErrorMessage("Hmmm, no results. Try again.");
      setRandom(undefined);
    }
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Welcome clicked={clicked} checkAuth={checkAuth}/>} />
          <Route path="/about" component={() => <About />}/>
          {
          document.cookie.includes('true') ? 
          <>
          <Route exact path="/recipes" component={() => <Form getRecipe={getRecipe} getRandom={getRandom} logout={logout}/>} />
          <Route exact path="/recipes" component={() => <Recipes recipe={recipe} random={random} errorMessage={errorMessage} apiKey={apiKey}/>} />
          </> : <Redirect to="/" />
            }
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
