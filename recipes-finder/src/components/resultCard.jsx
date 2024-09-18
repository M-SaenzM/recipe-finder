import React from "react";
import '../styles/searchCard.css';

const ResultCard = ({recipe, onClick}) => {

    return (
        <>
            <div className="result-card" onClick={onClick}>
                <img src={recipe.image}></img>
                <h3>{recipe.title}</h3>
            </div>
        </>
    );
}

export default ResultCard;