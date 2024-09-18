import React from "react";
import ResultCard from "./resultCard";
import { useNavigate } from 'react-router-dom';
import '../styles/searchCard.css';

const RecipeResults = ({recipes}) => {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        console.log(id);
        
        navigate(`/recipe/${id}`);
      };
    

    return(
        <div className="results-container">
            {recipes.map((recipe) => (
                <ResultCard 
                    key={recipe.id} 
                    recipe={recipe}
                    onClick={() => handleCardClick(recipe.id)} />    
            ))}
            
           
        </div>
    );
}

export default RecipeResults;