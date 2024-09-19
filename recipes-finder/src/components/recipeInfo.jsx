import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';

const RecipeInfo = ({img,title,time,serving}) => {
    return (
        <>
            <div className="recipe-info">
                <img src={img}></img>
                <div>
                    <h1>{title}</h1>
                    <p><FontAwesomeIcon icon={faClock} color="#BCA37F" /> {time} Minutes</p>
                    <p><FontAwesomeIcon icon={faUtensils} color="#BCA37F" /> {serving} Servings</p>
                </div>
                
            </div>
        </>
    );
}

export default RecipeInfo