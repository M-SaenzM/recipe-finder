import React from "react";

const Pagination = ({totalPages,handleNextPage,handlePrevPage,handlePageClick,currentPage}) => {
    return (
        <>
        <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
        </>
    );
}

export default Pagination;