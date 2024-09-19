import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import '../styles/recipeDetail.css'

const RecipeIngredients = ({ingredients}) => {
    return (
        <div className="section-info">
            <h2><FontAwesomeIcon icon={faCarrot} style={{ color: '#BCA37F', fontSize: '24px' }}/> List Of Ingredients</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.name} - {ingredient.amount} {ingredient.unit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeIngredients;