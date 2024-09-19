import axios from 'axios';

const API_KEY = '0ac58da5b3ce4141bb9c215b28ed32fe';
//const API_KEY = '9eb39f57118343b2a73a79cb36d6a42b';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const fetchRecipes = async (query, page, cuisine = '') => {
  
  try {
    const offset = (page - 1) * 5;
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query: query,
        cuisine: cuisine,
        number: 5,
        offset: offset,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error - ", error);
    return [];
  }
};

export const fetchRecipeDetail = async (id) => {
  
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error - ", error);
    return [];
  }
};

/* export const fetchRecipes = async (page = 1) => {
  try {
    const response = await fetch('/data/testData.json'); 
    const data = await response.json();
    
    const perPage = 5;
    const start = (page - 1) * perPage;
    const paginatedData = {
      results: data.results.slice(start, start + perPage),
      totalResults: data.totalResults
    };

    return paginatedData;
  } catch (error) {
    console.error("Error fetching recipes from JSON: ", error);
    return { results: [], totalResults: 0 };
  }
}; */