import React from "react";
import '../styles/pagination.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({totalPages,handleNextPage,handlePrevPage,handlePageClick,currentPage}) => {
    return (
        <>
        <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faStepBackward} style={{ color: currentPage === 1 ? 'lightgray' : 'black', fontSize: '16px' }}/>
        </button>
         {totalPages().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faStepForward} style={{ color: currentPage === totalPages ? 'lightgray' : 'black', fontSize: '16px' }}/>
        </button>
      </div>
        </>
    );
}

export default Pagination;