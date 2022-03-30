import React from "react";

export const PaginationWrapper = ({children, currentPage, totalPages, onPrevClick, onNextClick, handleFirstPage, handleLastPage}) => {
const handleNextClick=()=>{
    if (currentPage+1<=500){
        onNextClick && onNextClick(currentPage+1)
    }
}
const handlePrevClick=()=>{
    if (currentPage-1>0){
        onPrevClick && onPrevClick(currentPage-1)
    }
}
const handleFirstPageClick=()=>{
    handleFirstPage&&handleFirstPage(1)
}
const handleLastPageClick=()=>{
    handleLastPage&&handleLastPage(500)
}

    return (
        <div>

             <div>
            <button disabled={currentPage-1===0} onClick={handleFirstPageClick}>first page</button>
            <button disabled={currentPage-1===0} onClick={handlePrevClick}>prev page</button>

            <span>{currentPage} of {500}</span>
            <button disabled={currentPage===500} onClick={handleNextClick}>next page</button>
            <button disabled={currentPage===500} onClick={handleLastPageClick}>last page</button>
        </div>
            {children}
        </div>

    )

}
