import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import RecipeResults from "../components/results";
import useSearchRecipe from "../hooks/useSearchRecipe";
import Pagination from "../components/pagination";
import Header from "../components/header";
import Select from "react-select";


import { ColorRing, MagnifyingGlass } from "react-loader-spinner";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cuisine, setCuisine] = useState("");
  
  const { recipes, totalResults, loading, error } = useSearchRecipe(
    searchQuery,
    currentPage,
    cuisine.value
  );
  
  const totalPages = Math.ceil(totalResults / 5);
  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(10 / 2));
    const endPage = Math.min(totalPages, startPage + 10 - 1);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
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

  const handleCuisineChange = (selected) => {
    console.log(selected.value);
    
    setCuisine(selected);
    setCurrentPage(1);

  };

  const cuisineOption = [
    { value: "african", label: "African" },
    { value: "asian", label: "Asian" },
    { value: "american", label: "American" },
    { value: "british", label: "British" },
    { value: "cajun", label: "Cajun" },
    { value: "caribbean", label: "Caribbean" },
    { value: "chinese", label: "Chinese" },
    { value: "eastern European", label: "Eastern European" },
    { value: "european", label: "European" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "greek", label: "Greek" },
    { value: "indian", label: "Indian" },
    { value: "irish", label: "Irish" },
    { value: "italian", label: "Italian" },
    { value: "japanese", label: "Japanese" },
    { value: "jewish", label: "Jewish" },
    { value: "korean", label: "Korean" },
    { value: "latin American", label: "Latin American" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "mexican", label: "Mexican" },
    { value: "middle Eastern", label: "Middle Eastern" },
    { value: "nordic", label: "Nordic" },
    { value: "southern", label: "Southern" },
    { value: "spanish", label: "Spanish" },
    { value: "thai", label: "Thai" },
    { value: "vietnamese", label: "Vietnamese" },
  ];

  return (
    <>
      <div className="bg-filter">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <div className="filter-cuisine">
            <h3>Filter Results by Cuisine: </h3>
         <Select 
            options={cuisineOption} 
            placeholder="Select a Cuisine"
            value={cuisine}
            onChange={handleCuisineChange} 
        />    
        </div>
       
        <div className="response-block">
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
          {error && <p>Error loading recipes!</p>}
          {(!recipes || totalResults === 0) && <p>No Recipes Found!</p>}
          {recipes && <RecipeResults  recipes={recipes} />}
        </div>
        {totalResults > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={getPageNumbers}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
          />
        )}
      </div>
    </>
  );
};

export default SearchPage;
