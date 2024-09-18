import React from "react";
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {

    const { id } = useParams();

    return (
        <>
        <h1>{id}</h1>
        </>
    );
}

export default RecipeDetail;