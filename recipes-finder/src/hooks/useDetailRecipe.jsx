import { useState, useEffect } from 'react';
import { fetchRecipeDetail } from '../api/getRecipesAPI';

const useDetailRecipe = (id) => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeDetail(id);
        console.log(data);
        
        setRecipe(data);
      } catch (err) {
       
        setError(err);
        
      }
      setLoading(false);
    };

    if (id) {
      getRecipe();
    }
  }, [id]);

  return { recipe, loading, error };
};

export default useDetailRecipe;