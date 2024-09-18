import { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/getRecipesAPI';

const useSearchRecipe = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      try {
        const result = await fetchRecipes(query);
        setRecipes(result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    if (query) {
      getRecipes();
    }
  }, [query]);

  return { recipes, loading, error };
};

export default useSearchRecipe;