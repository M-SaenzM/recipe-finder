import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/recipeDetail.css'
import Header from "../components/header";
import RecipeInfo from "../components/recipeInfo";
import RecipeHealth from "../components/recipeHealth";
import RecipeIngredients from "../components/recipeIngredients";
import RecipeInstructions from "../components/recipeInstructions";
import useDetailRecipe from "../hooks/useDetailRecipe"
import { MagnifyingGlass } from "react-loader-spinner";

const RecipeDetail = () => {

    const { id } = useParams();
   
    const { recipe, loading, error  } = useDetailRecipe(id);
    console.log(recipe,loading,error);
    
    return (
        <>
        <div className="bg-filter">
             <Header/>
             {loading ? (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#113946"
            />
          ) : (
            ""
          )}
          {error && <p>Error loading recipe!</p>}
             {!loading && 
             <div className="recipe-page">
                <RecipeInfo img={recipe.image} title={recipe.title} time={recipe.readyInMinutes} serving={recipe.servings}/>
                <RecipeHealth vegetarian={recipe.vegetarian} vegan={recipe.vegan} glutten={recipe.glutenFree} dairy={recipe.dairyFree}/>
                 <RecipeIngredients ingredients={recipe.extendedIngredients}/>
               <RecipeInstructions instructions={recipe.analyzedInstructions[0]?.steps}/>
            </div>  
            }  
        </div>
        
        </>
    );
}

export default RecipeDetail;