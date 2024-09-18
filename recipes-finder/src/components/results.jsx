import React from "react";
import ResultCard from "./resultCard";

import '../styles/searchCard.css';

const RecipeResults = ({recipes}) => {
    return(
        <div className="results-container">
            {recipes.map((recipe) => (
                <ResultCard key={recipe.id} recipe={recipe}/>    
            ))}
            
           
        </div>
    );
}

export default RecipeResults;