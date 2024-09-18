import React, {useState} from 'react'
import SearchBar from '../components/searchBar'
import RecipeResults from '../components/results'
import useSearchRecipe from '../hooks/useSearchRecipe'
import Pagination from '../components/pagination'


const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { recipes, totalResults, loading, error } = useSearchRecipe(searchQuery,currentPage);
    

    const totalPages = Math.ceil(totalResults / 5);
    const getPageNumbers = () => {
        const startPage = Math.max(1, currentPage - Math.floor(10 / 2));
        const endPage = Math.min(totalPages, startPage + 10 - 1);
    
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
      };
    const handleSearch = (query) => {
      setSearchQuery(query);
    };
  
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading recipes...</p>}
      {error && <p>Error loading recipes!</p>}
      <RecipeResults recipes={recipes} />
      <Pagination 
       currentPage={currentPage}
       totalPages={getPageNumbers} 
       handleNextPage={handleNextPage} 
       handlePrevPage={handlePrevPage} 
       handlePageClick={handlePageClick}/>
    </>
  )
}

export default SearchPage
