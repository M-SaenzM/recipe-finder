import React from "react";
import '../styles/searchCard.css';

const ResultCard = ({recipe}) => {

    return (
        <>
            <div className="result-card">
                <img src={recipe.image}></img>
                <h3>{recipe.title}</h3>
            </div>
        </>
    );
}

export default ResultCard;