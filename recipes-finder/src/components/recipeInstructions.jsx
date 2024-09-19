import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import '../styles/recipeDetail.css'

const RecipeInstructions = ({instructions}) => {
   
    return(
        <div className="section-info">
            <h2><FontAwesomeIcon icon={faReceipt} style={{ color: '#BCA37F', fontSize: '24px' }}/> Instructions</h2>
            <ol>
                {instructions.map((step) => (
                <li key={step.number}>
                    {step.step}
                </li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeInstructions;