import React from 'react';
import Footer from './Footer';

const Recipes = (props) => (
    <div className="recipes">
        { props.random === undefined && !props.recipe.length && <p>{props.errorMessage}</p>}
            { props.random &&
        props.random.map((x) => {
            return <div id="random" key={x.id}>
                        <h2>{x.title}</h2>
                        <ul>    
                            {x.glutenFree === true &&  <li>Gluten free</li>}
                            {x.vegetarian === true &&  <li>Vegetarian</li>}
                            {x.vegan === true &&  <li>Vegan</li>}
                        </ul>
                        <img src={x.image} alt="Recipe" height="300" />
                        <div dangerouslySetInnerHTML={{__html: x.instructions}}></div>
                    </div>
        })}

            { props.recipe.length > 0 &&
        props.recipe.map((x) => {
            let hrefUrl = `https://api.spoonacular.com/recipes/${x.id}/information&apiKey=${props.apiKey}`
            return <div key={x.id}>
                        <h2>{x.title}</h2>
                        <a href={hrefUrl}><img src={x.image} alt="Recipe" height="300" /></a>
                    </div>  
        })
        }
    <Footer />
    </div>
)

export default Recipes;

