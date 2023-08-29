import React, { useState } from 'react'
import useStarWarsApi from '../../hooks/useStarWarsApi'
import { CharacterCards } from '../../components/CharacterCards';
import { getUrlId } from '../../utils/getUrlId';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useStarWarsApi(`people?page=${currentPage}`);
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
      <h1 className='mb-10 text-2xl font-bold text-center'>Star Wars Characters</h1>
      {data && (
        <div className="flex flex-wrap justify-center gap-10 align-center">
          {data.results.map(person => (
            <CharacterCards
            imageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
              person.url,
            )}.jpg`}
            name={person.name}
            key={person.name}
            gender={person.gender}
            height={person.height}
            id={getUrlId(person.url)}
            type="characters"
          />
          ))}
        </div>)}

     <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:mb-0 md:mr-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <div className={`flex md:flex-row justify-between items-center mt-4 ${pageNumbers.length > 1 ? 'hidden md:flex' : ''}`}>
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
  </div>
  )
}
