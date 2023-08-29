import React, { useState } from 'react'
import useStarWarsApi from '../../hooks/useStarWarsApi'
import { getUrlId } from '../../utils/getUrlId';
import { MoviesCards } from '../../components/MoviesCards';

export const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, error } = useStarWarsApi(`films`);
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    if (isLoading) {
      return (
        <div className="mt-4 text-center">
          <p>Loading...</p>
          <div className="w-8 h-8 mx-auto mt-4 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
      );
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    const totalPages = Math.ceil(data.count / data.results.length);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  
    return (
      <div className="p-10 bg-neutral-100">
      <h1 className='mb-10 text-2xl font-bold text-center'>Star Wars Movies</h1>
      {data && (
        <div className="flex flex-wrap justify-center gap-10 align-center">
          {data.results.map(movie => (
             <MoviesCards
             imageUrl={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
               movie.url,
             )}.jpg`}
             title={movie.title}
             key={movie.title}
             director={movie.director}
             opening_crawl={movie.opening_crawl}
             id={getUrlId(movie.url)}
           />
          ))}
        </div>
      )}
       <div className="flex justify-between mt-20 mb-10">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous page
              </button>
              <div className="flex">
                {pageNumbers.map(number => (
                  <button
                    key={number}
                    className={`mx-1 ${
                      number === currentPage
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-700 text-white hover:text-white'
                    } font-bold py-2 px-3 rounded`}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next page
              </button>
            </div>
        </div>
    )
}
