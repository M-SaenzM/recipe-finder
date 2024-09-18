import axios from 'axios';

const API_KEY = '0ac58da5b3ce4141bb9c215b28ed32fe';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const fetchRecipes = async (query, page) => {
  
  try {
    const offset = (page - 1) * 5;
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query: query,
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
