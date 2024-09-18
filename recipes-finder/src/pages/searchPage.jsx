import React, {useState} from 'react'
import SearchBar from '../components/searchBar'
import RecipeResults from '../components/results'
import useSearchRecipe from '../hooks/useSearchRecipe'


const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { recipes, loading, error } = useSearchRecipe(searchQuery);
  
    const handleSearch = (query) => {
      setSearchQuery(query);
    };
  
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading recipes...</p>}
      {error && <p>Error loading recipes!</p>}
      <RecipeResults recipes={recipes} />
    </>
  )
}

export default SearchPage
