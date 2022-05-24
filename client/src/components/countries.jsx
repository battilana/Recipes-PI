import "../App.css";
import {useSelector} from "react-redux";
import React, { useEffect, useState } from 'react';
import Country from "./country";
import ReactPaginate from 'react-paginate';

function Countries({countries}){
        return <div className= "grid">
            {countries && countries.map((country)=>{
                return <Country  id = {country?.id} key = {country?.id} name={country?.name} image={country?.image} 
                continent={country?.continent}/>
                })}
        </div>
}

export default  function PaginatedCountries({countriesPerPage}){
    const [currentCountries,setCurrentCountries] = useState(null)
    const [pageCount,setPageCount] = useState(0)
    const [pageOffset, setPageOffset] = useState(0);
    let countries = useSelector((state)=> state.filteredCount)
    useEffect(() => {
        const endOffset = pageOffset + countriesPerPage;
        setCurrentCountries(countries.slice(pageOffset, endOffset));

        setPageCount(Math.ceil(countries.length / countriesPerPage));
  }, [pageOffset, countriesPerPage, countries]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * countriesPerPage) % countries.length;
        setPageOffset(newOffset);
  };
  return (
    < >
      <div className="container">
      <Countries countries={currentCountries} />
      </div>
      <div className = "paginationC">
      <ReactPaginate className = "pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
    </>
  );
}


