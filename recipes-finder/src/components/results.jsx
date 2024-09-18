import React from "react";
import ResultCard from "./resultCard";

import '../styles/searchCard.css';

const RecipeResults = () => {
    return(
        <div className="results-container">
            <ResultCard/>
            <ResultCard/>
            <ResultCard/>
            <ResultCard/>
            <ResultCard/>
        </div>
    );
}

export default RecipeResults;