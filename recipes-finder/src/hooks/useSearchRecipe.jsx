import { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/getRecipesAPI';

const useSearchRecipe = (query,page,cuisine = '') => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);


  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      try {
        //const data = await fetchRecipes(query,page,cuisine);
        const data = await fetchRecipes(page);
        console.log(data);
        
        setRecipes(data.results);
        setTotalResults(data.totalResults)
      } catch (err) {
       
        setError(err);
        
      }
      setLoading(false);
    };

    if (query) {
      getRecipes();
    }
  }, [query,page, cuisine]);

  return { recipes, totalResults, loading, error };
};

export default useSearchRecipe;